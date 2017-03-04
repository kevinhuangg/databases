var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      // var connection = db.connection;
      // connection.query('select * from messages', function(error, results, fields) {
      //   if (err) {
      //     throw err;
      //   }
      //   console.log(results);
      //   res.json(results);
      // });

    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (req, res) {
      var username = req.body.username;
      // console.log(db);
      db.query('select * from users', function(error, results, fields) {
        console.log('abc');
        if (error) {
          console.log('error', error);
        }
        console.log('results', results);
        res.json(results);
      });
    }
  }
};

// 'insert into users ("username") values ("kevin")'