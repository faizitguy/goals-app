const Category = require("../models/Cateogory");

const getCategories = (req, res) => {
  Category.find()
    .then((categories) => res.status(200).json(categories))
    .catch((err) => res.status(400).json("Error : " + err));
};

const postCategories = (req, res) => {
  const category = req.body.category;
  const newCategory = new Category({ category });
  newCategory
    .save()
    .then(() => res.status(200).json("Category added scucessfully"))
    .catch((err) => res.status(400).json("Error : " + err));
};

module.exports = { getCategories };
