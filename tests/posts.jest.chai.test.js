require('dotenv').config();
import request from '../config/supertest';
import { assert } from 'chai';
const faker = require('faker');
const { createRandomUserWithFaker, deleteUser } = require('../helpers/user.helper');

const TOKEN = process.env.ACCESS_TOKEN;

describe('Test Posts API from "Online REST API for Testing and Prototyping" using Jest and Chai', () => {

    let user, postData,  postId;

    beforeAll(async () => {
        user = await createRandomUserWithFaker();
        postData = {
            user_id: user.id,
            title: faker.lorem.sentence(),
            body: faker.lorem.paragraphs(),
        };
    });

    afterAll(async () => {
        await deleteUser();
    });

    describe('Tests for /POST call', () => {

        test('Add a post Test', async () => {
            const response = await request
                .post('posts')
                .set('Authorization', `Bearer ${TOKEN}`)
                .send(postData);
            assert.include(response.body.data, postData);
            //store post id of newly created post
            postId=response.body.data.id;
        });

        test('Retrieve post Test', async () => {
            const response = await request
                .get(`posts/${postId}`)
                .set('Authorization', `Bearer ${TOKEN}`)
                .expect(200);
            assert.include(response.body.data, postData);
        });
    });
});