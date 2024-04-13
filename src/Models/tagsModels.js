const prisma = require("../db");

const getAllTags = async () => {
  const AllTags = await prisma.tags.findMany();
  return AllTags;
};

const getTagById = async (id) => {
  const tag = await prisma.tags.findUnique({
    where: {
      id: id,
    },
  });
  return tag;
};

const getTagByName = async (name) => {
  const tag = await prisma.tags.findMany({
    where: {
      name: name,
    },
  });
  return tag;
};

const insertTag = async (name) => {
  const inserted = await prisma.tags.create({ data: { name: name } });
  return inserted;
};

const updateTagById = async (id, name) => {
  const updated = await prisma.tags.update({
    where: {
      id: id,
    },
    data: { name: name },
  });
  return updated;
};

const deleteTagById = async (id) => {
  const deleted = await prisma.tags.delete({
    where: {
      id: id,
    },
  });
  return deleted;
};

module.exports = {
  getAllTags,
  getTagById,
  insertTag,
  getTagByName,
  updateTagById,
  deleteTagById,
};
