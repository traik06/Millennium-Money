const expect = require('chai').expect
const request = require('supertest')
const app = require('../server');
const assert = require('chai').assert;



describe ("POST /monthlyPayment", function (done) {
    it('Display Data on page', function(done){
        request(app)
        .post('/monthlyPayment')
        .type('form')
        .send({
                user: 100, 
                Rent: 100,
                Car : 100,
                Phone : 100,
                Food : 100,
                Fuel : 100,
                Leisure : 100,
                Memberships : 100,
                Util : 100,
                Internet : 100,
                savings: 100,
                checking : 100,
                income : 100
          })
          expect('Location', '/monthlyPayment');
          expect(302, done);
          done()
      });
      it('Data is not present', function(done){
        request(app)
        .post('/monthlyPayment')
        
          expect('Location', '/dashboard');
          expect(302, done);
          expect.fail("Missing Data")
      });





})