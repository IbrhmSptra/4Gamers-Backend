const express = require("express");
const authorization = require("../Middlewares/authorization");
const {
  create,
  update,
  deletePost,
  userPost,
  allPost,
} = require("../Controllers/postController");
const { postValidator } = require("../Middlewares/postValidation");
const router = express.Router();

router.post("/create", authorization, postValidator, create);
router.patch("/edit/:id", authorization, postValidator, update);
router.delete("/delete/:id", authorization, deletePost);
router.get("/user/:page", authorization, userPost);
router.get("/:page", authorization, allPost);

module.exports = router;
