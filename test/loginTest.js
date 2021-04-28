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
        
          .type('form')
          .send({ email: 'f@f', password: 'f' })
          
          .expect('Location', '/dashboard')
          .expect(302, done);

  });
  it("fail at login, invalid credentials", function(done){
      request(app)
          .post('/login')
          
          .type('form')
          .send({ email: 'f@f', password: '1234' })
          
          .expect('Location', '/dashboard')
          expect.fail("Invalid Credentials")

  });
  it("fail at login, User Not Registered", function(done){
    request(app)
        .post('/login')
        
        .type('form')
        .send({ email: 'yeee@yeeee', password: '0987' })
       
        .expect('Location', '/dashboard')
        expect.fail("User Not Registered")

});
});



