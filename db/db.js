const Sequelize = require('sequelize');
const {env} = require('../env');

const sequelize = new Sequelize(
  env.DATABASE_NAME,
  env.DATABASE_USER,
  env.DATABASE_PASSWORD,
  {
    host: env.DATABASE_HOST,
    port: 5432,
    dialect: 'postgres',
    logging: console.log, 
  //   dialectOptions: { 
  //     ssl: {
  //        require: true,
  //        rejectUnauthorized: false
  //     }
  // }
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