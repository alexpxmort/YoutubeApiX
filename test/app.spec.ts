import supertest from "supertest";
import app from "@app/index";
import { request } from "./helper/helper";

describe("App", () => {

    const server:supertest.SuperTest<supertest.Test> =  request(app);

    it("should use cors middleware", () => {
      server.get("/").expect("Access-Control-Allow-Origin", "*");
    });
  
    it("should serve swagger documentation", () => {  
      server.get("/api-docs").expect(200);
    });
  
    it("should use youtube router", () => {  
      server.get("/youtube").expect(200);
    });
  });