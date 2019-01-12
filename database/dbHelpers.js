import Sequelize from 'sequelize';
import SQL_connection from './index';
import { Member, Board, Team, Card, Card_Member } from './schema';

const getRandomMemberHelper = id => Member.findById(id);

const getRandom5BoardsHelper = () => Board.findAll({ order: SQL_connection.random(), limit: 5 }); //either randomId for initial load or name for subsequent query

const getRandom10TeamsHelper = () => Team.findAll({ order: SQL_connection.random(), limit: 10 });

const getRandom50CardsHelper = () => Card.findAll({ order: SQL_connection.random(), limit: 50 }); //join card_member to member

const createBoardHelper = title => Board.create({ title });

const getBoardHelper = title => 
  Board.findAll({ 
    where: { 
      title: { [Sequelize.Op.iLike]: `%${title}%` }
    },
    limit: 10
  });

const createTeamHelper = teamname => Team.create({ teamname });

//We'll also need userId to first confirm it there's an association
//wouldn't want everyone to get your cards
const getCardHelper = label => 
  Card.findAll({
    where: {
      label: { [Sequelize.Op.iLike]: `%${label}%` }
    },
    include: [{
      model: Member
    }],
    limit: 6
  }); 

  // select c.*, m.* from cards c inner join card_members cm on c.id = cm."cardId" inner join members m on m.id = cm."memberId" where c.label like '%__INSERT QUERY__%' order by random() limit 10;

const updateCardHelper = (id, update) =>
  Card.update(
    update,
    { where: { id }}
  )

const createCardMemberAssociation = (cardId, memberId) =>
    SQL_connection.query(`INSERT INTO card_members ("cardId", "memberId") VALUES (${cardId}, ${memberId})`)


export {
  getRandomMemberHelper,
  getRandom5BoardsHelper,
  createBoardHelper,
  getBoardHelper,
  getRandom10TeamsHelper,
  createTeamHelper,
  getRandom50CardsHelper,
  getCardHelper,
  updateCardHelper,
  createCardMemberAssociation
}