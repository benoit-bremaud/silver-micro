import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/server/app.js';
import User from '../../src/server/models/User.js';

describe('Auth Controller', () => {
  before(async () => {
    await User.deleteMany({});
  });

  it('should register a user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'password123'
      });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('user');
  });
});
