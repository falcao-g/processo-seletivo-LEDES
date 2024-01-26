/* eslint-disable no-undef */
const request = require('supertest');
const jwt = require('jsonwebtoken');
const { v4 } = require('uuid');
const { api } = require('../src/api');
const { database } = require('../src/database/knex');

let admin;
let adminJWT;
let user;
let userJWT;

beforeEach(async () => {
  admin = {
    uuid: v4(),
    name: 'admin',
    register: '445566',
    cpf: '12345678910',
    password: '123456',
    role: 'CEO',
    dateOfBirth: '1998-11-11',
    image: 'admin',
    type: 'ADMIN',
  };
  await database('user').insert(admin);
  adminJWT = jwt.sign(admin, process.env.SECRET);

  user = {
    uuid: v4(),
    name: 'user',
    register: '889900',
    cpf: '12345678912',
    password: '123456',
    role: 'CEO',
    dateOfBirth: '1998-11-11',
    image: 'user',
    type: 'USER',
  };
  await database('user').insert(user);
  userJWT = jwt.sign(user, process.env.SECRET);
});

afterEach(async () => {
  await database('user')
    .del()
    .where({ cpf: admin.cpf });

  await database('user')
    .del()
    .where({ cpf: user.cpf });
});

test('should be able to approve user changes', async () => {
  const response = await request(api)
    .post('/admin/review')
    .set('Cookie', [`jwt=${adminJWT}`])
    .send({
      register: user.register,
      situation: 'APPROVED',
    });
  expect(response).toHaveProperty('status', 200);
  expect(response).toHaveProperty('body');
});

test('should be able to disapprove user changes', async () => {
  const response = await request(api)
    .post('/admin/review')
    .set('Cookie', [`jwt=${adminJWT}`])
    .send({
      register: user.register,
      situation: 'DISAPPROVED',
    });
  expect(response).toHaveProperty('status', 200);
  expect(response).toHaveProperty('body');
});

test('should be able to list user requests', async () => {
  const response = await request(api)
    .get('/admin/requests')
    .set('Cookie', [`jwt=${adminJWT}`]);
  expect(response).toHaveProperty('status', 200);
  expect(response).toHaveProperty('body');
});

test('should be able to promote user to admin', async () => {
  const response = await request(api)
    .post('/admin/makeadmin')
    .set('Cookie', [`jwt=${adminJWT}`])
    .send({
      register: user.register,
    });
  expect(response).toHaveProperty('status', 200);
  expect(response).toHaveProperty('body');
});

test('should not be able to review changes if not in analysis', async () => {
  await database('user').where({ register: user.register }).update({ situation: 'APPROVED' });
  const response = await request(api)
    .post('/admin/review')
    .set('Cookie', [`jwt=${adminJWT}`])
    .send({
      register: user.register,
      situation: 'APPROVED',
    });
  expect(response).toHaveProperty('status', 400);
  expect(response).toHaveProperty('body');
});

test('should not be able to review changes if not authenticated', async () => {
  const response = await request(api)
    .post('/admin/review')
    .send({
      register: user.register,
      situation: 'APPROVED',
    });
  expect(response).toHaveProperty('status', 401);
  expect(response).toHaveProperty('body');
});

test('should not be able to list user requests if not authenticated', async () => {
  const response = await request(api)
    .get('/admin/requests');
  expect(response).toHaveProperty('status', 401);
  expect(response).toHaveProperty('body');
});

test('should not be able to promote user to admin if not authenticated', async () => {
  const response = await request(api)
    .post('/admin/makeadmin')
    .send({
      register: user.register,
    });
  expect(response).toHaveProperty('status', 401);
  expect(response).toHaveProperty('body');
});

test('should not be able to review without register', async () => {
  const response = await request(api)
    .post('/admin/review')
    .set('Cookie', [`jwt=${adminJWT}`])
    .send({
      situation: 'APPROVED',
    });
  expect(response).toHaveProperty('status', 400);
  expect(response).toHaveProperty('body');
});

test('should not be able to review without situation', async () => {
  const response = await request(api)
    .post('/admin/review')
    .set('Cookie', [`jwt=${adminJWT}`])
    .send({
      register: user.register,
    });
  expect(response).toHaveProperty('status', 400);
  expect(response).toHaveProperty('body');
});

test('should not be able to review with invalid situation', async () => {
  const response = await request(api)
    .post('/admin/review')
    .set('Cookie', [`jwt=${adminJWT}`])
    .send({
      register: user.register,
      situation: 'INVALID',
    });
  expect(response).toHaveProperty('status', 400);
  expect(response).toHaveProperty('body');
});

test('should not be able to promote user that is already admin', async () => {
  await database('user').where({ register: user.register }).update({ type: 'ADMIN' });
  const response = await request(api)
    .post('/admin/makeadmin')
    .set('Cookie', [`jwt=${adminJWT}`])
    .send({
      register: user.register,
    });
  expect(response).toHaveProperty('status', 400);
  expect(response).toHaveProperty('body');
});

test('should not be able to review if not admin', async () => {
  const response = await request(api)
    .post('/admin/review')
    .set('Cookie', [`jwt=${userJWT}`])
    .send({
      register: user.register,
      situation: 'APPROVED',
    });
  expect(response).toHaveProperty('status', 401);
  expect(response).toHaveProperty('body');
});

test('should not be able to list user requests if not admin', async () => {
  const response = await request(api)
    .get('/admin/requests')
    .set('Cookie', [`jwt=${userJWT}`]);
  expect(response).toHaveProperty('status', 401);
  expect(response).toHaveProperty('body');
});

test('should not be able to promote user to admin if not admin', async () => {
  const response = await request(api)
    .post('/admin/makeadmin')
    .set('Cookie', [`jwt=${userJWT}`])
    .send({
      register: user.register,
    });
  expect(response).toHaveProperty('status', 401);
  expect(response).toHaveProperty('body');
});
