const router = require("express").Router();

const Task = require("../models/Task");

const auth = require("../middleware/authMiddleware");

router.get("/", auth, async (req, res) => {

  try {

    const tasks = await Task.find()
      .populate("assignedTo")
      .populate("project");

    res.json(tasks);

  } catch (error) {

    res.status(500).json(error);

  }
});

router.post("/", auth, async (req, res) => {

  try {

    const task = await Task.create(req.body);

    res.json(task);

  } catch (error) {

    res.status(500).json(error);

  }
});

router.put("/:id", auth, async (req, res) => {

  try {

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(task);

  } catch (error) {

    res.status(500).json(error);

  }
});

module.exports = router;