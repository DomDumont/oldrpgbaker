import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { Server } from '../server/server';

chai.use(chaiHttp);
const expect = chai.expect;
let should = chai.should();

describe('GET api/v1/maps', () => {

  beforeEach((done) => { // Before each test we empty the database
    Server.getInstance().models.map.remove({}, (err) => {
      done();
    });
  });

  it('should be json', () => {
    return chai.request(Server.getInstance().app).get('/api/v1/maps')
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
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
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

});
