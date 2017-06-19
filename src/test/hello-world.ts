import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import {Server} from '../server/server';

chai.use(chaiHttp);
const expect = chai.expect;

describe('baseRoute', () => {
  let theServer = new Server();
  it('should be json', () => {
    return chai.request(theServer.app).get('/')
    .then(res => {
      expect(res.type).to.eql('application/json');
    });
  });

  it('should have a message prop', () => {
    return chai.request(theServer.app).get('/')
    .then(res => {
      expect(res.body.message).to.eql('Hello World!');
    });
  });

});