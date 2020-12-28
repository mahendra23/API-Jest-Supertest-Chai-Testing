require('dotenv').config();
import request from '../config/supertest';
import mockUserDataWithFaker from '../mocks/user.mocks';

const TOKEN = process.env.ACCESS_TOKEN;

export const createRandomUserWithFaker = async () => {
  const res = await request
    .post(`users`)
    .set('Authorization', `Bearer ${TOKEN}`)
    .send(mockUserDataWithFaker);

  return res.body.data;
};

export const deleteUser = async (userid) => {
  const res = await request
    .delete(`users/${userid}`)
    .set('Authorization', `Bearer ${TOKEN}`);
  return res.body.data;
};