import Sequelize from 'sequelize';

let SQL_connection;

if (process.env.DATABASE) {
  SQL_connection = new Sequelize(process.env.DATABASE);
} else {
  SQL_connection = new Sequelize('trello_search', process.env.USERNAME || 'root', process.env.PW || '', {
    host: process.env.host || 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
      handleDisconnects: true,
    },
    define: {
      timestamps: false
    }
  })
}

SQL_connection
  .authenticate()
  .then(() => console.log('SQL DB connected!!'))
  .catch(err => console.error('SQL DB error: ', err));

export default SQL_connection;