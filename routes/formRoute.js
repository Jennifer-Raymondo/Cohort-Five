const express = require('express');
const router = express.Router();
const Student = require('../models/form');

router.get('/', (req, res) => {
  res.render('form', { success: false });
});

router.post('/', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.render('form', { success: true });
  } catch (err) {
    console.log(err);
    res.render('form', { success: false });
  }
});

module.exports = router;
