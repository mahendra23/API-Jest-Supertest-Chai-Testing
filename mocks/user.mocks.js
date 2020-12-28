const faker = require('faker');

let randomId = Math.floor(Math.random() * 999);

let firstName = faker.name.firstName();
let lastName = faker.name.lastName();

const mockUserDataWithFaker = {
    email: `${firstName}-${lastName}-${randomId}@atomatikts.co`,
    name: `${firstName} ${lastName}`,
    status: 'Inactive',
    gender: 'Female'
  };

export default mockUserDataWithFaker;