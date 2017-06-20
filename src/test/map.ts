import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import {Server} from '../server/server';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET api/v1/maps', () => {
  
  it('should be json', () => {
    return chai.request(Server.getInstance().app).get('/api/v1/maps')
    .then(res => {
      expect(res.type).to.eql('application/json');
    });
  });

  it('should have a message prop', () => {
    return chai.request(Server.getInstance().app).get('/api/v1/maps')
    .then(res => {
      expect(res.body.message).to.eql('getAll maps');
    });
  });

});
