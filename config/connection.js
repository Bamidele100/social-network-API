const { connect, connection } = require('mongoose');


const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialnetworkDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;


// const mongoose = require('mongoose');

// // Wrap Mongoose around local connection to MongoDB
// mongoose.connect('mongodb://localhost:27017/socialnetworkDB', {
//   // useFindAndModify: false,  
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

// // Export connection 
// module.exports = mongoose.connection;
