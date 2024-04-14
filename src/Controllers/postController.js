const {
  createPost,
  updateUserPost,
  getUserPostById,
  deleteUserPost,
  getUserPost,
  getAllPost,
} = require("../Models/postModels");

const userPost = async (req, res) => {
  try {
    const page = req.params.page;
    const { uuid } = req.user;
    const { data, totalResult } = await getUserPost(uuid, page);
    res.status(200).send({ page: page, totalResult: totalResult, data: data });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const allPost = async (req, res) => {
  try {
    const page = req.params.page;
    const { data, totalResult } = await getAllPost(page);
    res.status(200).send({ page: page, totalResult: totalResult, data: data });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const create = async (req, res) => {
  try {
    const data = req.body;
    const { uuid } = req.user;
    const created = await createPost(data, uuid);
    res
      .status(200)
      .send({ message: "Post successfully created", data: created });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const update = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { uuid } = req.user;
    const data = req.body;
    const selectedPost = await getUserPostById(id, uuid);
    if (selectedPost.length == 0) {
      return res.status(400).send({ message: "Data not found" });
    }
    const updatedData = await updateUserPost(data, id, uuid);
    res
      .status(200)
      .send({ message: "Post successfully updated", data: updatedData });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { uuid } = req.user;
    const selectedPost = await getUserPostById(id, uuid);
    if (selectedPost.length == 0) {
      return res.status(400).send({ message: "Data not found" });
    }
    const deleted = await deleteUserPost(id, uuid);
    res
      .status(200)
      .send({ message: "Post successfully deleted", data: deleted });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = { create, update, deletePost, userPost, allPost };
