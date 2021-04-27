const expect = require('chai').expect
const request = require('supertest')
const app = require('../server');
mongoose = require("mongoose");
const User = require("../models/user.js");
app.use(require('../passportconfig'))
const assert = require('chai').assert;




describe('Checking Page Connections', () => {

  it('POST /login :: should respond with 200 respond code', () => {

      request(app).get('/login')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=utf-8')
      .end((err, res) => {
          if (err) throw err;
      });

  });

});

describe("Login Functionality Testing :: POST /login", function(){

  it("should login user, valid credentials", function(done){
      request(app)
          .post('/login')
          // .set('Accept', 'application/json')
          // .set('Content-Type', 'application/json')
          .type('form')
          .send({ email: 'f@f', password: 'f' })
          // .expect(200)
          .expect('Location', '/dashboard')
          .expect(302, done);

  });
  it("fail at login, invalid credentials", function(done){
      request(app)
          .post('/login')
          // .set('Accept', 'application/json')
          // .set('Content-Type', 'application/json')
          .type('form')
          .send({ email: 'f@f', password: '1234' })
          // .expect(200)
          .expect('Location', '/dashboard')
          expect.fail("Invalid Credentials")

  });
  it("fail at login, User Not Registered", function(done){
    request(app)
        .post('/login')
        // .set('Accept', 'application/json')
        // .set('Content-Type', 'application/json')
        .type('form')
        .send({ email: 'yeee@yeeee', password: '0987' })
        // .expect(200)
        .expect('Location', '/dashboard')
        expect.fail("User Not Registered")

});
});




// describe('User', function () {
//   before(function(done) {
//       user = new User({
//         username: "test",
//         email    : "test@test",
//         password : "test",
        
//       });
//       user.save(done)
//     });
//   describe('Login test', function () {
//       it('should redirect to dashboard', function (done) {
//         request(app)
//         .post('/login')
//         .type('form')
//         .send({ email: 'test@test', password: 'test' })
        
        
//         .expect('Location', '/dashboard')
//         .expect(302, done);
        
//       })

//   after(function(done) {
//       User.remove().exec();
//       return done();
//     });

// })
// })

// var server = request.agent(app)

// describe("<Unit Test>", function() {
//   describe("API User:", function() {
//     before(function(done) {
//       user = new User({
//         email    : "user@user.com",
//         firstName: "Full Name",
//         lastName : "Last Name",
//         password : "pass11"
//       });
//       user.save();
//       done();
//     });
//     describe("Authentication", function() {
//       it("Local login", function(done) {
//         server.post("/login").send({
//           email   : "user@user.com",
//           password: "pass11"
//         }).end(function(err, res) {
//           expect('Location', '/dashboard')
//           expect(200, done);
//           done()
//         });
//       });
//     });
//     after(function(done) {
//       User.remove().exec();
//       done();
//     });
//   });
// });


// describe('User', function () {
//   before(function(done) {
//       user = new User({
//         username: "test",
//         email    : "2",
//         password : "pass11",
//         time     : ""
//       });
//       user.save(done)
//     });
//   describe('Login failed test', function () {
//       it('should redirect to login', function (done) {
//         request(app)
//         .post('/login')
//         .field('email', '')
//         .field('password', 'pass11')
        
//         .expect('Location', '/login')
//         .expect(200, done);
//         
//       })

//   after(function(done) {
//       User.remove().exec();
//       return done();
//     });

// })
// })