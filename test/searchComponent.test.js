import app from '../server/index';
import { Board, Team } from '../database/schema';
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

  test('it should add a new board to the DB', async () => {
    const { status } = await supertest(app).post('/api/board').send({ title: 'jestBoard' });
    expect(status).toEqual(201);
    const { body } = await supertest(app).get('/api/board?title=jestBoard');
    expect(body.title).toEqual('jestBoard');
    Board.destroy({ where: { title: 'jestBoard' }});
  });

  test('it should add a new team to the DB', async () => {
    const { status } = await supertest(app).post('/api/team').send({ teamname: 'jestTeam' });
    expect(status).toEqual(201);
    await Team.findOne({ where: { teamname: 'jestTeam' }})
      .then(result => expect(result.teamname).toEqual('jestTeam'))
    Team.destroy({ where: { teamname: 'jestTeam' }});
  });


});
