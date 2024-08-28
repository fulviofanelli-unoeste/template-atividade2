import app from '../server'
import request from 'supertest'


let token = '';
let apiTest;

//gerando token
beforeAll(async () => {
  const response = await request(app).get('/token');
  token = response.body.chaveapi;
  apiTest = request.agent(app).set({"chaveapi": token})
});

//não autorizados!
describe("GET /marca ", () => {
    test("Deve retornar Não Autorizado", async () => {
      const response = (await request(app).get("/marca"));
      expect(response.statusCode).toBe(401);
    });
});

describe("GET /modelo/{marca} ", () => {
    test("Deve retornar Não Autorizado", async () => {
      const response = (await request(app).get("/modelo/1"));
      expect(response.statusCode).toBe(401);
    });
});

describe("GET /anos/{marca}/{modelo} ", () => {
    test("Deve retornar Não Autorizado", async () => {
      const response = (await request(app).get("/anos/1/1"));
      expect(response.statusCode).toBe(401);
    });
});

describe("GET /info/{marca}/{modelo}/{ano} ", () => {
    test("Deve retornar Não Autorizado", async () => {
      const response = (await request(app).get("/info/1/1/1"));
      expect(response.statusCode).toBe(401);
    });
});
// fim não autorizado

describe("GET /marca ", () => {
    test("Deve retornar Ok", async () => {
      const response = (await apiTest.get("/marca"));
      expect(response.statusCode).toBe(200);
    });
});


describe("GET /modelo/{marca} ", () => {
    test("Deve retornar Ok", async () => {
      const response = (await apiTest.get("/modelo/1"));
      expect(response.statusCode).toBe(200);
    });
  });

describe("GET /modelo/{marca} ", () => {
    test("Deve retornar Não Encontrado", async () => {
      const response = (await apiTest.get("/modelo/999999999"));
      expect(response.statusCode).toBe(404);
    });
  });

describe("GET /anos/{marca}/{modelo} ", () => {
    test("Deve retornar Ok", async () => {
      const response = (await apiTest.get("/anos/1/1"));
      expect(response.statusCode).toBe(200);
    });
  });

describe("GET /anos/{marca}/{modelo} ", () => {
    test("Deve retornar Não Encontrado", async () => {
      const response = (await apiTest.get("/anos/999999999/999999999"));
      expect(response.statusCode).toBe(404);
    });
  });

describe("GET /info/{marca}/{modelo}/{ano} ", () => {
    test("Deve retornar Ok", async () => {
      const response = (await apiTest.get("/info/1/1/1992-1"));
      expect(response.statusCode).toBe(200);
    });
  });

describe("GET /info/{marca}/{modelo}/{ano} ", () => {
    test("Deve retornar Não encontrado", async () => {
      const response = (await apiTest.get("/info/999999999/999999999/999999999"));
      expect(response.statusCode).toBe(404);
    });
  });