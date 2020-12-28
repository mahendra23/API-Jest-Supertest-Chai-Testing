require('dotenv').config();
import request from '../config/supertest';

const { createRandomUserWithFaker, deleteUser } = require('../helpers/user.helper');

const TOKEN = process.env.ACCESS_TOKEN;

describe('Test User API from "Online REST API for Testing and Prototyping" using Jest', () => {
    
    let user, userId;

    beforeAll(async () => {
        user = await createRandomUserWithFaker();
    });

    describe('Tests for /POST call', () => {

        test('Add a user Test', async () => {
           expect(user.id).not.toBe();
           //store user id of new user created
           userId=user.id;
        });
    });

   describe('Tests for /GET call', () => {
        
        test('Get all users Test', async () => {
           const response = await request
                .get('users')
                .set('Authorization', `Bearer ${TOKEN}`);

           expect(response.body.data).not.toBe();
        });

        test('Get user with ID Test', async () => {
            const response = await request
                .get(`users/${userId}`)
                .set('Authorization', `Bearer ${TOKEN}`);

             expect(response.body.data.id).toBe(userId);
             expect(response.body.data).toMatchObject(user);
         });
    });

    describe('Test for /PUT call', () => {
        test('Update user data Test', async () => {
            const updatedUserData = {
                status: 'Active',
                name: `Luffy - ${Math.floor(Math.random() * 9999)}`,
            };
          
            const response = await request
                .put(`users/${userId}`)
                .set('Authorization', `Bearer ${TOKEN}`)
                .send(updatedUserData);
                
             expect(response.body.data.id).toBe(userId);
             expect(response.body.data).toMatchObject(updatedUserData);
        });
      });
    
    describe('Test for /DELETE call', () => {
        test('Delete user id Test', async () => {
            const response = await deleteUser(userId);
            expect(response).toBe(null);
        });
    });
});