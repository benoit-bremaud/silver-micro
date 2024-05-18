import { expect } from 'chai';
import { validateRegister } from '../../src/server/validations/userValidation.js';

describe('User Validation', () => {
  it('should validate a valid user input', () => {
    const result = validateRegister({
      username: 'testuser',
      email: 'test@example.com',
      password: '123456'
    });
    expect(result.error).to.be.undefined;
  });

  it('should return an error for an invalid email', () => {
    const result = validateRegister({
      username: 'testuser',
      email: 'invalidemail',
      password: '123456'
    });
    expect(result.error).to.not.be.undefined;
  });

  it('should return an error for a short password', () => {
    const result = validateRegister({
      username: 'testuser',
      email: 'test@example.com',
      password: '123'
    });
    expect(result.error).to.not.be.undefined;
  });

  it('should return an error for a missing username', () => {
    const result = validateRegister({
      username: '',
      email: 'test@example.com',
      password: '123456'
    });
    expect(result.error).to.not.be.undefined;
  });

  it('should return an error for a missing email', () => {
    const result = validateRegister({
      username: 'testuser',
      email: '',
      password: '123456'
    });
    expect(result.error).to.not.be.undefined;
  });

  it('should return an error for a missing password', () => {
    const result = validateRegister({
      username: 'testuser',
      email: '',
      password: '123456'
    });
    expect(result.error).to.not.be.undefined;
  });

  it('should return an error for an empty object', () => {
    const result = validateRegister({});
    expect(result.error).to.not.be.undefined;
  });

  it('should return an error for a missing object', () => {
    const result = validateRegister();
    expect(result.error).to.not.be.undefined;
  });

  it('should return an error for an invalid object', () => {
    const result = validateRegister('invalidobject');
    expect(result.error).to.not.be.undefined;
  });

  it('should return an error for an invalid email and password', () => {
    const result = validateRegister({
      username: 'testuser',
      email: 'invalidemail',
      password: '123'
    });
    expect(result.error).to.not.be.undefined;
  });

  it('should return an error for an invalid username and password', () => {
    const result = validateRegister({
      username: '',
      email: 'test@example.com',
      password: '123'
    });
    expect(result.error).to.not.be.undefined;
  });

  it('should return an error for an invalid username and email', () => {
    const result = validateRegister({
      username: '',
      email: '',
      password: '123456'
    });
    expect(result.error).to.not.be.undefined;
  });

  it('should return an error for an invalid username, email, and password', () => {
    const result = validateRegister({
      username: '',
      email: '',
      password: '123'
    });
    expect(result.error).to.not.be.undefined;
  });

  it('should return an error for an invalid username and email', () => {
    const result = validateRegister({
      username: '',
      email: 'invalidemail',
      password: '123456'
    });
    expect(result.error).to.not.be.undefined;
  });
  
});
