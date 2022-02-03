var express = require('express');
var router = express.Router();

const User = require("../models/user.model.js")

/* GET users listing. */
router.get('/', async(req, res, next) =>  {
  // res.send('respond with a resource');
  try {
    const user = await User.find().lean().exec();
    return res.status(200).send(User);
    
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
