const {
  getAllTags,
  getTagById,
  insertTag,
  getTagByName,
  updateTagById,
  deleteTagById,
} = require("../Models/tagsModels");

const getAll = async (req, res) => {
  try {
    const tags = await getAllTags();
    res.status(200).send(tags);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const getTag = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const tag = await getTagById(id);
    if (!tag) {
      return res.status(400).send({ message: "Data not found" });
    }
    res.status(200).send(tag);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const addTag = async (req, res) => {
  try {
    const { name } = req.body;
    //check if theres any with the same name
    const tag = await getTagByName(name);
    if (tag.length > 0) {
      return res
        .status(400)
        .send({ message: `tag with name ${name} already in database` });
    }
    const data = await insertTag(name);
    res.status(200).send({ message: "Tag successfully added", data: data });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const updateTag = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    //check if theres data with that id
    const tag = await getTagById(id);
    if (!tag) {
      return res.status(400).send({ message: `Data not found` });
    }
    const data = await updateTagById(id, name);
    res.status(200).send({ message: "Tag successfully updated", data: data });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const deleteTag = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    //check if theres data with that id
    const tag = await getTagById(id);
    if (!tag) {
      return res.status(400).send({ message: `Data not found` });
    }
    const data = await deleteTagById(id);
    res.status(200).send({ message: "Tag successfully deleted", data: data });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = { getAll, getTag, addTag, updateTag, deleteTag };
