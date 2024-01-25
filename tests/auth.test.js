/* eslint-disable no-undef */
const request = require('supertest');
const { api } = require('../src/api');
const { database } = require('../src/database/knex');

let newUser;
let register;

beforeAll(async () => {
  newUser = {
    name: 'teste',
    cpf: '12345678910',
    password: '123456',
    role: 'CEO',
    dateOfBirth: '1998-11-11',
    image: 'teste',
  };
});

afterAll(async () => {
  await database('user')
    .del()
    .where({ cpf: newUser.cpf });
});

test('should create a new user', async () => {
  const response = await request(api)
    .post('/auth/signup')
    .send(newUser);
  register = response.body.data.register;
  expect(response).toHaveProperty('status', 201);
  expect(response.body.data).toEqual({
    register, name: newUser.name, cpf: newUser.cpf, role: newUser.role, dateOfBirth: newUser.dateOfBirth, image: newUser.image, situation: 'ANALYSIS',
  });
});

test('should login with the user', async () => {
  const response = await request(api)
    .post('/auth/login')
    .send({ register, password: newUser.password });
  console.log(register);
  expect(response).toHaveProperty('status', 200);
});

test('should not login with a wrong password', async () => {
  const response = await request(api)
    .post('/auth/login')
    .send({ register, password: '1234567' });
  expect(response).toHaveProperty('status', 400);
});

test('should not login with a wrong register', async () => {
  const response = await request(api)
    .post('/auth/login')
    .send({ register: 123, password: newUser.password });
  expect(response).toHaveProperty('status', 400);
});

test('should not login with a missing register', async () => {
  const response = await request(api)
    .post('/auth/login')
    .send({ password: newUser.password });
  expect(response).toHaveProperty('status', 400);
});

test('should not login with a missing password', async () => {
  const response = await request(api)
    .post('/auth/login')
    .send({ register });
  expect(response).toHaveProperty('status', 400);
});

test('should not create a duplicated user', async () => {
  const response = await request(api)
    .post('/auth/signup')
    .send(newUser);
  expect(response).toHaveProperty('status', 400);
});

test('should not create an user with missing name', async () => {
  const response = await request(api)
    .post('/auth/signup')
    .send({ ...newUser, name: undefined });
  expect(response).toHaveProperty('status', 400);
});

test('should not create an user with missing cpf', async () => {
  const response = await request(api)
    .post('/auth/signup')
    .send({ ...newUser, cpf: undefined });
  expect(response).toHaveProperty('status', 400);
});

test('should not create an user with missing role', async () => {
  const response = await request(api)
    .post('/auth/signup')
    .send({ ...newUser, role: undefined });
  expect(response).toHaveProperty('status', 400);
});

test('should not create an user with missing date of birth', async () => {
  const response = await request(api)
    .post('/auth/signup')
    .send({ ...newUser, dateOfBirth: undefined });
  expect(response).toHaveProperty('status', 400);
});

test('should not create an user with missing date of password', async () => {
  const response = await request(api)
    .post('/auth/signup')
    .send({ ...newUser, password: undefined });
  expect(response).toHaveProperty('status', 400);
});

test('should not create an user with missing date of image', async () => {
  const response = await request(api)
    .post('/auth/signup')
    .send({ ...newUser, image: undefined });
  expect(response).toHaveProperty('status', 400);
});
