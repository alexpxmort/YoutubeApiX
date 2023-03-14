import supertest from "supertest";
import app from "@app/index";
import { expect, request } from "../helper/helper";

describe("Youtube Route", () => {

    const server:supertest.SuperTest<supertest.Test> =  request(app);

    it("should retrieve default value WHEN search param is undefined ", async () => {
     const result =  await server.get("/youtube/undefined")
     const json  = JSON.parse(result.text);
     expect(result.status).to.eql(200)
     expect(json).to.have.property('videos')
    });

    it("should get homilia diaria value WHEN search param contains homilia ", async () => {
        const result =  await server.get("/youtube/homilia")
        const json  = JSON.parse(result.text);
        expect(result.status).to.eql(200)
        expect(json).to.not.have.property('videos')
    });

    it("should search another value ", async () => {
        const result =  await server.get("/youtube/pokemon")
        const json  = JSON.parse(result.text);
        expect(result.status).to.eql(200)
        expect(json).to.have.property('videos')
    });
  

  });
