import Sequelize from 'sequelize';
import SQL_connection from './index';

const Member = SQL_connection.define('member', {
  name: Sequelize.STRING
}, {
  timestamps: false
});

const Board = SQL_connection.define('board', {
  title: Sequelize.STRING,
  team_id: { type: Sequelize.STRING, allowNull: true }
}, {
  timestamps: false
});

const Team = SQL_connection.define('team', {
  group: Sequelize.STRING //don't really need other fields for a mock module
}, {
  timestamps: false
});

const Card = SQL_connection.define('board', {
  comment: Sequelize.STRING,
  description: Sequelize.STRING,
  label: Sequelize.STRING,
  list: Sequelize.STRING,
}, {
  timestamps: false
});

const Card_Member = SQL_connection.define('card_member', {}, { timestamps: false });
Member.hasMany(Card);
Card.hasMany(Member);

SQL_connection.sync();

export {
  Member,
  Board,
  Team,
  Card,
  Card_Member
}