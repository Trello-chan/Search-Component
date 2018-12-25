import app from '../server/index';
import { Board } from '../database/schema';
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

  test('it should add to the DB', async () => {
    const { status } = await supertest(app).post('/api/board', { title: 'jest' });
    expect(status).toEqual(201);
    const { body } = await supertest(app).get('/api/board?title=jest');
    expect(body.title).toEqual('jest');
    Board.destroy({ where: { title: 'jest' }});
  });


});
