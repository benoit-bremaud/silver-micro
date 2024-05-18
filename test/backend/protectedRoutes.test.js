import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/server/app.js';

chai.use(chaiHttp);
const { expect } = chai;

describe('Protected Routes', () => {
  it('should return 401 if no token is provided', (done) => {
    chai.request(app)
      .get('/api/protected/data')
      .end((_err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.property('error', 'Authentication required');
        done();
      });
  });

  it('should return 401 if token is invalid', (done) => {
    chai.request(app)
      .get('/api/protected/data')
      .set('Authorization', 'Bearer invalidtoken')
      .end((_err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.property('error', 'Invalid token');
        done();
      });
  });

  it('should return 200 if token is valid', (done) => {
    // Remplacez 'validtoken' par un token JWT valide pour l'utilisateur de test
    chai.request(app)
      .get('/api/protected/data')
      .set('Authorization', 'Bearer validtoken')
      .end((_err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('data');
        done();
      });
  });

  it('should return 403 if user is not authorized', (done) => {
    // Remplacez 'validtoken' par un token JWT valide pour un utilisateur non autorisé
    chai.request(app)
      .get('/api/protected/data')
      .set('Authorization', 'Bearer validtoken')
      .end((_err, res) => {
        expect(res).to.have.status(403);
        expect(res.body).to.have.property('error', 'Unauthorized');
        done();
      });
  });

  it('should return 200 if user is authorized', (done) => {
    // Remplacez 'validtoken' par un token JWT valide pour un utilisateur autorisé
    chai.request(app)
      .get('/api/protected/data')
      .set('Authorization', 'Bearer validtoken')
      .end((_err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('data');
        done();
      });
  });

  it('should return 401 if token is blacklisted', (done) => {
    // Remplacez 'blacklistedtoken' par un token JWT valide pour l'utilisateur de test
    chai.request(app)
      .get('/api/protected/data')
      .set('Authorization', 'Bearer blacklistedtoken')
      .end((_err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.property('error', 'Token invalid');
        done();
      });
  });

  it('should return 401 if token is expired', (done) => {
    // Remplacez 'expiredtoken' par un token JWT valide pour l'utilisateur de test
    chai.request(app)
      .get('/api/protected/data')
      .set('Authorization', 'Bearer expiredtoken')
      .end((_err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.property('error', 'Token invalid');
        done();
      });
  });

  it('should return 401 if token is missing', (done) => {
    chai.request(app)
      .post('/api/protected/data')
      .end((_err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.property('error', 'Authentication required');
        done();
      });
  });

  it('should return 401 if token is invalid', (done) => {
    chai.request(app)
      .post('/api/protected/data')
      .set('Authorization', 'Bearer invalidtoken')
      .end((_err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.property('error', 'Invalid token');
        done();
      });
  });

  it('should return 200 if token is valid', (done) => {
    // Remplacez 'validtoken' par un token JWT valide pour l'utilisateur de test
    chai.request(app)
      .post('/api/protected/data')
      .set('Authorization', 'Bearer validtoken')
      .end((_err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('data');
        done();
      });
  });

  it('should return 403 if user is not authorized', (done) => {
    // Remplacez 'validtoken' par un token JWT valide pour un utilisateur non autorisé
    chai.request(app)
      .post('/api/protected/data')
      .set('Authorization', 'Bearer validtoken')
      .end((_err, res) => {
        expect(res).to.have.status(403);
        expect(res.body).to.have.property('error', 'Unauthorized');
        done();
      });
  });

  it('should return 200 if user is authorized', (done) => {
    // Remplacez 'validtoken' par un token JWT valide pour un utilisateur autorisé
    chai.request(app)
      .post('/api/protected/data')
      .set('Authorization', 'Bearer validtoken')
      .end((_err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('data');
        done();
      });
  });

  it('should return 401 if token is blacklisted', (done) => {
    // Remplacez 'blacklistedtoken' par un token JWT valide pour l'utilisateur de test
    chai.request(app)
      .post('/api/protected/data')
      .set('Authorization', 'Bearer blacklistedtoken')
      .end((_err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.property('error', 'Token invalid');
        done();
      });
  });
});

// Path: test/backend/protectedRoutes.test.js