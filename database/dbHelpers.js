import SQL_connection from './index';
import { Member, Board, Team, Card, Card_Member } from './schema';

const getRandomMemberHelper = () => Member.findById(Math.ceil(Math.random() * 100));

const getRandom15BoardsHelper = query => Board.findOne(query); //either randomId for initial load or name for subsequent query

const createBoardHelper = title => Board.create({ title });

const getBoardHelper = title => Board.findOne({ where: { title }});

const getRandom10TeamsHelper = () => Team.findAll({ order: SQL_connection.random(), limit: 10 });

const createTeamHelper = teamname => Team.create({ teamname });

const getRandom50CardsHelper = () => Card.findAll({ order: SQL_connection.random(), limit: 50 }); //join card_member to member

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
  getRandom15BoardsHelper,
  createBoardHelper,
  getBoardHelper,
  getRandom10TeamsHelper,
  createTeamHelper,
  getRandom50CardsHelper,
  getCardHelper,
  updateCardHelper
}