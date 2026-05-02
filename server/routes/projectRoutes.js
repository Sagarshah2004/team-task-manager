const router = require("express").Router();
const Project = require("../models/Project");
const auth = require("../middleware/authMiddleware");

router.get("/", auth, async (req, res) => {
  const projects = await Project.find()
    .populate("members");

  res.json(projects);
});

router.post("/", auth, async (req, res) => {
  const project = await Project.create(req.body);

  res.json(project);
});

module.exports = router;