import { Member, Board, Team, Card, Card_Member } from './schema';

const getRandomMemberHelper = () => Member.findById(Math.floor(Math.random() * 1000000));

const getBoardHelper = query => Board.findOne(query); //either randomId for initial load or name for subsequent query

const createBoardHelper = name => Board.create({ name });

const getTeamHelper = () => Team.findAll({ order: 'random()', limit: 10 });

const createTeamHelper = name => Board.create({ name });

const getRandomCardsHelper = () => Card.findAll({ order: 'random()', limit: 50 }); //join card_member to member

const getCardHelper = query => 
  Card.findOne({ 
    label: { $like: `\%${query}\%`},
    include: [{
      model: Member
    }]
  }); //join card_member to member

const updateCardHelper = (id, update) =>
  Card.update(
    update,
    { where: { id }}
  )

export {
  getRandomMemberHelper,
  getBoardHelper,
  createBoardHelper,
  getTeamHelper,
  createTeamHelper,
  getRandomCardsHelper,
  getCardHelper,
  updateCardHelper
}