const express = require("express");
const router = express.Router();
const x = require("../controller/taskController");
// const authMiddleware = require("../middleware/authMiddleware");

// router.use(authMiddleware);
router.post("/", x.createTask);
router.get("/:projectId", x.getTasksByProject);
router.put("/:id", x.updateTask);
router.delete("/:id", x.deleteTask);

module.exports = router;
