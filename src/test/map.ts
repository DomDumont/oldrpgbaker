import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { Server } from '../server/server';

chai.use(chaiHttp);
const expect = chai.expect;
let should = chai.should();

let token = null;

describe('GET api/v1/maps', () => {

  var token: string;

  beforeEach((done) => { // Before each test we empty the database
    Server.getInstance().models.map.remove({});

    let user = {
      email: 'newuser@titi.com',
      password: 'rototo'
    };
    chai.request(Server.getInstance().app)
      .post('/api/v1/users/register')
      .send(user)
      .end(function (err, res) {
        chai.request(Server.getInstance().app)
          .post('/api/v1/users/authenticate')
          .send(user)
          .end((err2, res2) => {

            res2.should.have.status(200);
            res2.body.should.be.a('object');
            res2.body.should.have.property('success').eql(true);
            res2.body.should.have.property('token');
            token = res2.body.token;
            done();
          });
      });

  });

  it('should be json', () => {
    return chai.request(Server.getInstance().app)    
    .get('/api/v1/maps')
    .set('Authorization', token)
      .then(res => {
        expect(res.type).to.eql('application/json');
      });
  });

  /*
    * Test the /GET route
    */
  describe('/GET map', () => {
    it('it should GET all the maps', (done) => {
      chai.request(Server.getInstance().app).get('/api/v1/maps')
      .set('Authorization', token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe('/GET/:id map', () => {
    it('it should GET a map by the given id', (done) => {
      let tempModel = Server.getInstance().models.map;
      let map = new tempModel({ name: 'The Lord of the Rings' });
      map.save((err, map2) => {
        chai.request(Server.getInstance().app)        
          .get('/api/v1/maps/' + map2.id)
          .set('Authorization', token)
          .send(map2)
          .end((err2, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('name');
            res.body.should.have.property('_id').eql(map2.id);
            done();
          });
      });

    });
  });

  /*
  * Test the /POST route
  */
  describe('/POST map', () => {

    it('it should POST a map ', (done) => {
      let map = {
        name: 'The Village',
      };
      chai.request(Server.getInstance().app)
        .post('/api/v1/maps')
        .set('Authorization', token)
        .send(map)
        .end((err, res) => {

          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Map successfully added!');
          res.body.map.should.have.property('name');
          done();
        });
    });
  });

  describe('/PUT/:id map', () => {
    it('it should UPDATE a map given the id', (done) => {
      let tempModel = Server.getInstance().models.map;
      let map = new tempModel({ name: 'The Chronicles of Narnia' });
      map.save((err, map2) => {
        chai.request(Server.getInstance().app)
          .put('/api/v1/maps/' + map2.id)
          .set('Authorization', token)
          .send({ name: 'The Chronicles of Narnia' })
          .end((err2, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Map updated!');
            done();
          });
      });
    });
  });

});
