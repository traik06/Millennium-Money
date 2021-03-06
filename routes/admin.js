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


  router.post('/deleteUser', function(req, res) {
    User.findOne({username: req.body.username}).exec(function(err,obj) { 
        
        if (!obj) {
            req.flash('error', 'that user does not have accounts');
            return res.redirect('spending');
        }
        User.remove()
        res.render('admin')
        
        

    });
});

module.exports = router