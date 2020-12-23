const request = require("supertest")("https://www.metlink.org.nz/api/v1/StopDepartures");
const expect = require("chai").expect;

describe("GET /", function () {
  it("returns all", async function () {
    const response = await request.get("/");
    
    expect(response.status).to.eql(400);
  });
});

describe("GET /WELL", function () {
  it("returns all trains departing from Wellington Station", async function () {
    const response = await request.get("/WELL");
    
    expect(response.status).to.eql(200);
  });
});

describe("GET /PARE", function () {
  it("returns all trains departing from Paremata Station", async function () {
    const response = await request.get("/PARE");
    
    expect(response.status).to.eql(200);
  });
});
