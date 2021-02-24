const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require("../models/user.js");
const { ensureAuthenticated } = require("../auth.js");



router.get('/adminLogin', (req, res) => {
    res.render('adminLogin')
})
router.get('/admin', (req, res) => {
    res.render('admin')
})

router.post('/adminLogin', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/admin',
      failureRedirect: '/register',
      failureFlash: true,
    })(req, res, next);
  });
  

module.exports = router