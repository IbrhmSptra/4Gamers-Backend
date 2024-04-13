const express = require("express");
const { create, update, deletePost } = require("../Controllers/postController");
const { postValidator } = require("../Middlewares/postValidation");
const router = express.Router();

router.post("/create", postValidator, create);
router.patch("/edit/:id", postValidator, update);
router.delete("/delete/:id", deletePost);

module.exports = router;
