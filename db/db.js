const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  'database1',
  'postgres',
  'Rudhram1234',
  {
    host: 'database1.cjgg0c8y6wzj.us-east-1.rds.amazonaws.com',
    port: 5432,
    dialect: 'postgres',
    logging: console.log, 
    dialectOptions: { //< Add this
      ssl: {
         require: true,
         rejectUnauthorized: false
      }
  }
 }
);

const connectToDatabase = async () => {
  console.log('Connecting to database...');
  try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      await sequelize.sync().then(() => {
          console.log('Database synced');
      });
      
  } catch (error) {
      console.error('Unable to connect to the database:', error);
  }
};

module.exports = {sequelize,connectToDatabase};