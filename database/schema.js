import Sequelize from 'sequelize';
import SQL_connection from './index';

const Member = SQL_connection.define('member', {
  name: Sequelize.STRING
});

const Team = SQL_connection.define('team', {
  teamname: Sequelize.STRING //don't really need other fields for a mock module
});

const Board = SQL_connection.define('board', {
  title: Sequelize.STRING,
  team_id: { type: Sequelize.INTEGER, allowNull: true, references: { model: 'teams', key: 'id' }, onUpdate: 'CASCADE', onDelete: 'CASCADE'},
  background_image: { type: Sequelize.STRING, allowNull: true }
});

// Team.hasMany(Board);

const Card = SQL_connection.define('card', {
  label: Sequelize.STRING,
  description: Sequelize.STRING,
  comment: Sequelize.STRING,
  list: Sequelize.STRING,
  board_id: { type: Sequelize.INTEGER, references: { model: 'boards', key: 'id' }, onUpdate: 'CASCADE', onDelete: 'CASCADE'}
});

// Board.hasMany(Card);

const Card_Member = SQL_connection.define('card_member', {
  card_id: { type: Sequelize.INTEGER, references: { model: 'cards', key: 'id' }, onUpdate: 'CASCADE', onDelete: 'CASCADE'},
  member_id: { type: Sequelize.INTEGER, references: { model: 'members', key: 'id' }, onUpdate: 'CASCADE', onDelete: 'CASCADE'}
});
// Member.hasMany(Card);
// Card.belongsToMany(Member, { through: 'card_members' });  //as card_id

SQL_connection.sync();

export {
  Member,
  Board,
  Team,
  Card,
  Card_Member
}