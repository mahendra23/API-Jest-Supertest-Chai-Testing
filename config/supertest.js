import apiconfig from './apiconfig';
const supertest = require('supertest');
const request = supertest(apiconfig.baseURL);

export default request;