const {
  getAll,
  getTag,
  addTag,
  updateTag,
  deleteTag,
} = require("../Controllers/tagsController");
const { tagValidator } = require("../Middlewares/tagValidation");
const express = require("express");
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getTag);
router.post("/insert", tagValidator, addTag);
router.patch("/edit/:id", tagValidator, updateTag);
router.delete("/delete/:id", deleteTag);

module.exports = router;
