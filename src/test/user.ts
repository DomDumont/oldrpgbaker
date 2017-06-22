import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { Server } from '../server/server';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET api/v1/users', () => {
    beforeEach((done) => { // Before each test we empty the database
        Server.getInstance().models.user.remove({}, (err) => {
            done();
        });
    });

    describe('/register new user', () => {

        it('it should register a new user ', (done) => {
            let user = {
                email: 'newuser@titi.com',
                password: 'rototo'
            };
            chai.request(Server.getInstance().app)
                .post('/api/v1/users/register')
                .send(user)
                .end((err, res) => {

                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('User successfully registered!');
                    done();
                });
        });
    });

});