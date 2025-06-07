const express = require("express");
const router = express.Router();
const x = require("../controller/projectController");
const authMiddleware = require("../middleware/authMiddleware");


// router.use();
router.post("/", authMiddleware, x.createProject);
router.get("/", authMiddleware, x.getProjects);
router.put("/:id", authMiddleware,  x.updateProject);
router.delete("/:id", authMiddleware, x.deleteProject);

module.exports = router;
