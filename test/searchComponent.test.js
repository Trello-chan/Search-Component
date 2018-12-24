import app from '../server/index';
import supertest from 'supertest';

describe('Search Component: ', () => {
  test('it should provide data from db', async () => {
    const { body, status} = await supertest(app).get('/api/load');
    expect(status).toEqual(200);
    expect(body).toHaveProperty('member');
    expect(body).toHaveProperty('boards');
    expect(body).toHaveProperty('teams');
    expect(body).toHaveProperty('cards');
  });
});
