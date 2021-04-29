const express = require("express");
const {
  getGoals,
  addGoal,
  editGoal,
  deleteGoal,
} = require("../controllers/goal-controllers");
const router = express.Router();

router.get("/api/goals", getGoals);
router.post("/api/goals", addGoal);
router.put("/api/goals/:id", editGoal);
router.delete("/api/goals/:id", deleteGoal);

module.exports = router;
