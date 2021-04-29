const express = require("express");
const Goal = require("../models/Goal");

const getGoals = (req, res) => {
  Goal.find()
    .then((goals) => res.status(200).json(goals))
    .catch((err) => {
      console.log(err);
    });
};

const addGoal = (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const category = req.body.category;
  const completed = req.body.completed;

  const newGoal = new Goal({ title, description, category, completed });
  newGoal
    .save()
    .then(() => res.status(200).json("Goal Added Successfully"))
    .catch((err) =>
      res.status(400).json({ error: "Error adding goal " + err })
    );
};

const editGoal = (req, res) => {
  Goal.findById(req.params.id)
    .then((goal) => {
      goal.id = req.body.id;
      goal.title = req.body.title;
      goal.description = req.body.description;
      goal.category = req.body.category;
      goal.completed = req.body.completed;

      goal
        .save()
        .then(() => res.status(200).json("goal updated successfully"))
        .catch((err) => res.status(400).json("Error :" + err));
    })
    .catch((err) => res.status(400).json("Error :" + err));
};

const deleteGoal = (req, res) => {
  Goal.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("goal deleted successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = { getGoals, addGoal, editGoal, deleteGoal };
