const mongoose = require('mongoose');
const { DATABASE_URI } = require('./config');
let dbConnection;

async function connectMongoDB() {
  try {
    console.log(`Connecting to DB at ${DATABASE_URI} ....`);
    dbConnection = await mongoose.connect(DATABASE_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    console.log(`Connected to DB`);
    return dbConnection;
  } catch (error) {
    console.log(error);
  }
}

function disconnectMongoDB() {
  console.log('Closing database connection');
  dbConnection.disconnect();
}

module.exports = {
  connectMongoDB,
  disconnectMongoDB
};
