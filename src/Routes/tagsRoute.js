const {
  getAll,
  getTag,
  addTag,
  updateTag,
  deleteTag,
} = require("../Controllers/tagsController");
const authorization = require("../Middlewares/authorization");
const { tagValidator } = require("../Middlewares/tagValidation");
const express = require("express");
const router = express.Router();

router.get("/", authorization, getAll);
router.get("/:id", authorization, getTag);
router.post("/insert", authorization, tagValidator, addTag);
router.patch("/edit/:id", authorization, tagValidator, updateTag);
router.delete("/delete/:id", authorization, deleteTag);

module.exports = router;
