const expect = require('chai').expect
const request = require('supertest')
const app = require('../server');
const assert = require('chai').assert;


describe ("POST /expense", function (done) {
    it('should file expense', function(done){
        request(app)
        //authenticatedUser
        .post('/fileExpenses')
        .type('form')
        .send({
          rent           : 100,
          car            : 100,
          phone          : 100,
          food           : 100,
          fuel           : 100,
          leisure        : 100,
          memberships    : 100,
          utilities      : 100,
          internet       : 100
          })
          expect('Location', '/dashboard');
          expect(302, done);
          done()
      });



      
      it('should not file expense, invalid characters', function(done){
        request(app)
        //authenticatedUser
        .post('/fileExpenses')
        .type('form')
        .send({
          rent           : 100,
          car            : 'asdf',
          phone          : 100,
          food           : 100,
          fuel           : 100,
          leisure        : 100,
          memberships    : '%#@@',
          utilities      : 100,
          internet       : 100
          })
          expect('Location', '/dashboard');
          expect(302, done);
          expect.fail("Invalid characters")
      });

})