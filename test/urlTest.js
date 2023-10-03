process.env.NODE_ENV = 'test';

const request = require('supertest-as-promised');
const { assert } = require('chai');
const app = require('../config/express');
const base58 = require('../api/helpers/base58');
const Url = require('../api/models/Url');

describe('Url', () => {
  before(async () => {
    await Url.sync({ force: true });
  });

  describe('POST /api/shorten', () => {
    it('It should short the url:https://indicina.co', (done) => {
      request(app)
        .post('/api/shorten')
        .send({
          url: 'https://indicina.co',
        })
        .expect(201)
        .then((res) => {
          assert.equal(res.body.shortUrl.split('/').slice(-1)[0], base58.encode(1));
          done();
        });
    });
  });

  describe('GET /:encodedId', () => {
    it('It should retrieve the shorten version of the url: https://indicina.co', (done) => {
      request(app)
        .get(`/${base58.encode(1)}`)
        .expect(302, done);
    });
  });
});
