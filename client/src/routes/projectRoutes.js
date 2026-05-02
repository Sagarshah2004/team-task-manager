const router = require("express").Router();

const Project = require("../models/Project");

const auth = require("../middleware/authMiddleware");

router.get("/", auth, async (req, res) => {

  try {

    const projects = await Project.find()
      .populate("members");

    res.json(projects);

  } catch (error) {

    res.status(500).json(error);

  }
});

router.post("/", auth, async (req, res) => {

  try {

    const project = await Project.create({
      ...req.body,
      createdBy: req.user.id
    });

    res.json(project);

  } catch (error) {

    res.status(500).json(error);

  }
});

module.exports = router;