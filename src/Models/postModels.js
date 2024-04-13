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

const createPost = async (data) => {
  const tags = data.tags.map((i) => {
    return { name: i };
  });
  const createdData = await prisma.post.create({
    data: {
      title: data.title,
      image: data.image,
      content: data.content,
      authorId: data.uuid,
      tags: { create: tags },
    },
  });
  return createdData;
};

const updateUserPost = async (data, id) => {
  const tags = data.tags?.map((i) => {
    return { name: i };
  });
  const updated = await prisma.post.update({
    where: { id: id, authorId: data.uuid },
    data: {
      title: data.title,
      image: data.image,
      content: data.content,
      tags: { create: tags },
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
};
