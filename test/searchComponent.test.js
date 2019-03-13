import app from '../server/index';
import { Board, Card, Team, Card_Member } from '../database/schema';
import supertest from 'supertest';

describe('Search Component: ', () => {
  test('it should provide data from db', async () => {
    const { body, status} = await supertest(app).get('/search-api/load?id=6');
    expect(status).toEqual(200);
    expect(body).toHaveProperty('member');
    expect(body).toHaveProperty('boards');
    expect(body).toHaveProperty('teams');
    expect(body).toHaveProperty('cards');
  });

  test('it should add a new board to the DB', async () => {
    const { status } = await supertest(app).post('/search-api/board').send({ title: 'jestBoard' });
    expect(status).toEqual(201);
    const { body } = await supertest(app).get('/search-api/board?title=jestBoard');
    expect(body[0].title).toEqual('jestBoard');
    Board.destroy({ where: { title: 'jestBoard' }});
  });

  test('it should add a new team to the DB', async () => {
    const { status } = await supertest(app).post('/search-api/team').send({ teamname: 'jestTeam' });
    expect(status).toEqual(201);
    await Team.findOne({ where: { teamname: 'jestTeam' }})
      .then(result => expect(result.teamname).toEqual('jestTeam'))
    Team.destroy({ where: { teamname: 'jestTeam' }});
  });

  test('it should get an existing card from the DB', async () => {
    await Card.create({ label: 'jestCard', description: 'jestCard', comment: 'jestCard', list: 'jestCard', board_id: 5 });
    const { body, status } = await supertest(app).get('/search-api/card?label=jestCard');
    expect(status).toEqual(200);
    expect(body[0].label).toEqual('jestCard');
    const { body: likeBody, status: likeStatus } = await supertest(app).get('/search-api/card?label=jest');
    expect(likeStatus).toEqual(200);
    expect(likeBody[0].label).toEqual('jestCard');
    Card.destroy({ where: { label: 'jestCard' }});
  });

  test('it should update an existing card from the DB', async () => {
    await Card.create({ label: 'jestCard', description: 'jestCard', comment: 'jestCard', list: 'jestCard', board_id: 5 });
    const response = await supertest(app).get('/search-api/card?label=jestCard');
    let { id } = response.body[0];
    await expect(id).toBeGreaterThan(0);
    await supertest(app).patch('/search-api/card').send({ id, update: { label: 'jestCard', description: 'jestCard description', comment: 'jestCard comment', list: 'jestCard list', board_id: 5 }});
    const { body, status } = await supertest(app).get('/search-api/card?label=jestCard');
    let card = body[0];
    expect(status).toEqual(200);
    expect(card.label).toEqual('jestCard');
    expect(card.description).toEqual('jestCard description');
    expect(card.comment).toEqual('jestCard comment');
    expect(card.list).toEqual('jestCard list');
    expect(card.board_id).toEqual(5);
    await Card.destroy({ where: { label: 'jestCard' }});
  });

  test('it should create a card_member association when provided a member_id', async () => {
    await Card.create({ label: 'jestCard', description: 'jestCard', comment: 'jestCard', list: 'jestCard', board_id: 5 });
    const response = await supertest(app).get('/search-api/card?label=jestCard');
    let { id } = response.body[0];
    await expect(id).toBeGreaterThan(0);
    await supertest(app).patch('/search-api/card').send({ id, update: { label: 'jestCard', description: 'jestCard', comment: 'jestCard', list: 'jestCard', board_id: 5 }, member_id: 6 });
    const { body, status } = await supertest(app).get('/search-api/card?label=jestCard');
    let card = body[0];
    expect(status).toEqual(200);
    expect(card.label).toEqual('jestCard');
    expect(card.members[0].id).toEqual(6);
    await Card_Member.destroy({ where: { "card_id": id }});
    await Card.destroy({ where: { label: 'jestCard' }});
  });
});
