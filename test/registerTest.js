const expect = require('chai').expect
const request = require('supertest')
const app = require('../server');

describe('Checking Page Connections', () => {

  it('POST /register :: should respond with 200 respond code', () => {

      request(app).get('/register')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=utf-8')
      .end((err, res) => {
          if (err) throw err;
      });

  });

});

describe ("POST /register", function (done) {

    it("should redirect to login if user is registerd", function(done){
      request(app)
          .post('/register')
          
          .type('form')
          .send({ 
            username: "f",
            email: "f@f",
            password: "f"
            })
          
          .expect('Location', '/login')
          .expect(302, done);

    });
    it('should register user', function(done){
      request(app)
      
      .post('/register')
      .type('form')
      .send({
        username: "test1234",
        email: "test@test",
        password: "test1234"
        })
     
        
        expect('Location', '/login');
        expect(302, done);
        done()
        
        
      
      
    });
    it('fail at registration, not valid username', function(done){
      request(app)
      
      .post('/register')
      .type('form')
      .send({
        username: "test",
        email: "test@test",
        password: "test1234"
        })
      
        
        expect('Location', '/login');
        expect.fail("Not Valid Credentials")
        
        
      
     
    });
    it('fail at registration, not valid password', function(done){
      request(app)
      
      .post('/register')
      .type('form')
      .send({
        username: "test1234",
        email: "test@test",
        password: "test"
        })
      
        
        expect('Location', '/login');
        expect.fail("Not Valid Credentials")
        
        
      
     
    });
    it('fail at registration, not valid email', function(done){
      request(app)
      
      .post('/register')
      .type('form')
      .send({
        username: "test1234",
        email: "hello",
        password: "test1234"
        })
      
        
        expect('Location', '/login');
        expect.fail("Not Valid Credentials")
        
        
      
     
    });
    
    
});
