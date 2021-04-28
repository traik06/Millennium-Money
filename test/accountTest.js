// const expect = require('chai').expect
// const request = require('supertest')
// const app = require('../server');

const expect = require('chai').expect
const request = require('supertest')
const app = require('../server');
const assert = require('chai').assert;


describe ("POST /account", function (done) {
    it('should file expense', function(done){
        request(app)
        //authenticatedUser
        .post('/account')
        .type('form')
        .send({
            checkingAmount: 48   ,
            savingsAmount:  15000,
            monthlyIncome:  4999
          })
          expect('Location', '/dashboard');
          expect(302, done);
          done()
      });



      
      it('should file not expense', function(done){
        request(app)
        //authenticatedUser
        .post('/account')
        .type('form')
        .send({
            checkingAmount: 48   ,
            savingsAmount:  'asdfq',
            monthlyIncome:  4999
          })
          expect('Location', '/dashboard');
          expect(302, done);
          expect.fail("Invalid characters")
          
      });

})










// })