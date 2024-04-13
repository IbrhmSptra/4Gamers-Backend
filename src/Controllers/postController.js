const {
  createPost,
  updateUserPost,
  getUserPostById,
  deleteUserPost,
} = require("../Models/postModels");

const create = async (req, res) => {
  try {
    const data = req.body;
    const created = await createPost(data);
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
    const data = req.body;
    const selectedPost = await getUserPostById(id, data.uuid);
    if (selectedPost.length == 0) {
      return res.status(400).send({ message: "Data not found" });
    }
    const insertedData = await updateUserPost(data, id);
    res
      .status(200)
      .send({ message: "Post successfully updated", data: insertedData });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const selectedPost = await getUserPostById(id, data.uuid);
    if (selectedPost.length == 0) {
      return res.status(400).send({ message: "Data not found" });
    }
    const deleted = await deleteUserPost(id, data.uuid);
    res
      .status(200)
      .send({ message: "Post successfully deleted", data: deleted });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = { create, update, deletePost };
