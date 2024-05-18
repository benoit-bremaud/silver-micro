import request from 'supertest';
import app from '../../src/server/app.js';
import User from '../../src/server/models/User.js';

describe('Auth API', () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  describe('POST /api/auth/register', () => {
    it('should register a new user', async () => {
      const user = {
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'password123'
      };
      const res = await request(app)
        .post('/api/auth/register')
        .send(user);
      
      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty('username', 'testuser');
      expect(res.body).toHaveProperty('email', 'testuser@example.com');
    });
  });

  // Ajoutez d'autres tests pour /api/auth/login et /api/auth/logout ici
  describe('POST /api/auth/login', () => {
    it('should login a user', async () => {
      const user = {
        username: 'testuser',
        email: 'testuser@mail.com',
        password: 'password123'
      };
      await request(app)
        .post('/api/auth/register')
        .send(user);
      
      const res = await request(app)
        .post('/api/auth/login')
        .send({ email: user, password: user.password });

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('username', 'testuser');
      expect(res.body).toHaveProperty('email', 'testuser@example.com');
    });
  });
});
