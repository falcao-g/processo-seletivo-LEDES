/* eslint-disable no-undef */
const request = require('supertest');
const jwt = require('jsonwebtoken');
const { api } = require('../src/api');
const { database } = require('../src/database/knex');

let user;
let userJWT;
let editedUser;
let dummyJWT;

beforeAll(async () => {
  user = {
    name: 'teste',
    register: 66778899,
    cpf: '12345678910',
    encryptedPassword: '123456',
    role: 'CEO',
    dateOfBirth: '1998-11-11',
    image: 'teste',
  };
  await database.auth.registerUser(user);
  userJWT = jwt.sign(user, process.env.SECRET);

  editedUser = {
    name: 'testando',
    register: 66778899,
    cpf: '12345678910',
    role: 'CTO',
    dateOfBirth: '1998-11-11',
    image: 'teste2',
  };

  dummyJWT = jwt.sign({ register: 12345678 }, process.env.SECRET);
});

afterAll(async () => {
  await database('user')
    .del()
    .where({ cpf: user.cpf });
});

test('should get user info', async () => {
  const response = await request(api)
    .get('/user')
    .set('Cookie', [`jwt=${userJWT}`]);
  expect(response).toHaveProperty('status', 200);
  expect(response).toHaveProperty('body');
});

test('should edit user info', async () => {
  const response = await request(api)
    .put('/user')
    .set('Cookie', [`jwt=${userJWT}`])
    .send(editedUser);
  expect(response).toHaveProperty('status', 200);
  expect(response).toHaveProperty('body');
});

test('should not get info of an unauthenticated user', async () => {
  const response = await request(api)
    .get('/user');
  expect(response).toHaveProperty('status', 401);
});

test('should not get info of a user that does not exist', async () => {
  const response = await request(api)
    .get('/user')
    .set('Cookie', [`jwt=${dummyJWT}`]);
  expect(response).toHaveProperty('status', 404);
});

test('should not edit info of an unauthenticated user', async () => {
  const response = await request(api)
    .put('/user')
    .send(editedUser);
  expect(response).toHaveProperty('status', 401);
});

test('should not edit info of a user with a missing name', async () => {
  const response = await request(api)
    .put('/user')
    .set('Cookie', [`jwt=${userJWT}`])
    .send({ ...editedUser, name: undefined });
  expect(response).toHaveProperty('status', 400);
});

test('should not edit info of a user with a missing cpf', async () => {
  const response = await request(api)
    .put('/user')
    .set('Cookie', [`jwt=${userJWT}`])
    .send({ ...editedUser, cpf: undefined });
  expect(response).toHaveProperty('status', 400);
});

test('should not edit info of a user with a missing role', async () => {
  const response = await request(api)
    .put('/user')
    .set('Cookie', [`jwt=${userJWT}`])
    .send({ ...editedUser, role: undefined });
  expect(response).toHaveProperty('status', 400);
});

test('should not edit info of a user with a missing date of birth', async () => {
  const response = await request(api)
    .put('/user')
    .set('Cookie', [`jwt=${userJWT}`])
    .send({ ...editedUser, dateOfBirth: undefined });
  expect(response).toHaveProperty('status', 400);
});

test('should not edit info of a user with a missing image', async () => {
  const response = await request(api)
    .put('/user')
    .set('Cookie', [`jwt=${userJWT}`])
    .send({ ...editedUser, image: undefined });
  expect(response).toHaveProperty('status', 400);
});
