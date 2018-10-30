const app = require('./server').app;
const request = require('supertest');
const expect = require('expect');


describe('Get calls', () => {
    it('should return hello world response', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect('Hello world!')
            .end(done);
    });
    
    it('should return users', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .expect((response) => {
                expect(response.body.length).toBe(2);
                expect(response.body).toInclude({
                    name: 'Galon',
                    age: 25
                })
            })
            .end(done);
    });
})

