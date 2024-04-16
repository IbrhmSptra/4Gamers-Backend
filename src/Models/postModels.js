const prisma = require("../db");

const getUserPostById = async (id, uuid) => {
  const data = await prisma.post.findMany({
    where: {
      id: id,
      authorId: uuid,
    },
  });
  return data;
};

const getUserPost = async (uuid, page) => {
  const showsData = 10;
  const skip = (page - 1) * showsData;
  const totalResult = await prisma.post.count({ where: { authorId: uuid } });
  const data = await prisma.post.findMany({
    skip,
    take: showsData,
    where: { authorId: uuid },
    include: {
      tags: true,
    },
  });
  return { data, totalResult };
};

const getAllPost = async (page) => {
  const showsData = 10;
  const skip = (page - 1) * showsData;
  const totalResult = await prisma.post.count();
  const data = await prisma.post.findMany({
    skip,
    take: showsData,
    include: { tags: true },
  });
  return { data, totalResult };
};

const createPost = async (data, uuid) => {
  const tags = data.tags.map((i) => {
    return { id: i };
  });
  const createdData = await prisma.post.create({
    data: {
      title: data.title,
      image: data.image,
      content: data.content,
      authorId: uuid,
      tags: { connect: tags },
    },
    include: {
      tags: true,
    },
  });
  return createdData;
};

const updateUserPost = async (data, id, uuid) => {
  const tags = data.tags?.map((i) => {
    return { id: i };
  });
  const updated = await prisma.post.update({
    where: { id: id, authorId: uuid },
    data: {
      title: data.title,
      image: data.image,
      content: data.content,
      tags: {
        set: [],
        connect: tags,
      },
    },
    include: {
      tags: true,
    },
  });
  return updated;
};

const deleteUserPost = async (id, uuid) => {
  const deleted = await prisma.post.delete({
    where: { id: id, authorId: uuid },
  });
  return deleted;
};

module.exports = {
  createPost,
  updateUserPost,
  getUserPostById,
  deleteUserPost,
  getUserPost,
  getAllPost,
};
