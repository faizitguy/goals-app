const express = require("express");

const router = express.Router();

const {
  getCategories,
  addCategories,
} = require("../controllers/category-controllers");

router.get("/api/categories", getCategories);.
router.post("/api/categories", addCategories)

module.exports = router;
