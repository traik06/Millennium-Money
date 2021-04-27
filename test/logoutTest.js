const expect = require('chai').expect
const request = require('supertest')
const app = require('../server');
mongoose = require("mongoose");
const User = require("../models/user.js");



// before(function(done) {
//     user = new User({
//       username: "test2",
//       email    : "test2@test2",
//       password : "test2",
//       time     : "12"
//     });
//     user.save(done)
//     request(app)
//     .post('/login')
//     .field('email', 'user@user.com')
//     .field('password', 'pass11')
//     expect('Location', '/dashboard')
//     done()

//   });
  
  describe('Logout test', function () {
      it('should redirect to login', function (done) {
        request(app)
        .post('/logout')
        
        expect('Location', '/login')
        done()
      })

      it('redirect to incorrect page', function (done) {
        request(app)
        .post('/logout')
        
        expect('Location', '/register')
        expect.fail("Redirected to incorrect page")
        done()
      })

  

})


