var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      var queryString = 'select * from messages';
      db.query(queryString, function(error, results, fields) {
        if (error) {
          throw error;
        }
        console.log('this one', results);
        res.json(results);
      });

    }, // a function which produces all the messages
    post: function (req, res) {
      console.log(req.body);
      var message = req.body.message;
      var room = req.body.roomname;
      var user = req.body.username;
      var roomId = null;
      var userId = null;
      
      var roomQuery = 'insert into rooms (room_name) values ("' + room + '")';

      db.query(roomQuery, function( error, results, fields) {
        if (error) {
          var roomDupQuery = 'select id from rooms where room_name = "' + room + '"';
          db.query(roomDupQuery, function(error, results, fields) {
            if (error) {
              console.log('we really messed up somewhere');
            }
            roomId = results[0].id;
            console.log('dup roomid', roomId);

            db.query('select id from users where username="' + user + '"', function(error, results, fields) {
              if (error) {
                throw error;
              }
              userId = results[0].id;
              console.log('userId', userId);
              var messageQuery = `insert into messages (user_id, room_id, text) values ("${userId}", "${roomId}", "${message}")`;
              // `insert into messages (user_id, room_id, text) values (1, "${room}", "${message}")`
              db.query(messageQuery, function(error, results, fields) {
                if (error) {
                  throw error;
                }
                console.log(results);
                res.json(results);
              });
            });
          });
        } else {
          roomId = results.insertId;
          console.log('new roomId', roomId); 
          db.query('select id from users where username="' + user + '"', function(error, results, fields) {
            if (error) {
              throw error;
            }
            userId = results[0].id;
            console.log('userId', userId);
            var messageQuery = `insert into messages (user_id, room_id, text) values ("${userId}", "${room}", "${message}")`;
            // `insert into messages (user_id, room_id, text) values (1, "${room}", "${message}")`
            db.query(messageQuery, function(error, results, fields) {
              if (error) {
                throw error;
              }
              console.log(results);
              res.json(results);
            });
          });
        }
      });
        // db.query('insert into messages (user_id, room_id, text) values (')
        // res.end();
      //query to database to retrieve id of user that is equal to req.body.username
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      var userPullQuery = 'select * from users';
      db.query(userPullQuery, function(error, results, fields) {
        if (error) {
          console.log('we cannot get users for some reason');
        }
        res.json(results);
      });
    },
    post: function (req, res) {
      var username = req.body.username;
      var userQuery = 'insert into users (username) values ("' + username + '")';
      db.query(userQuery, function(error, results, fields) {
        console.log('abc');
        if (error) {
          res.end('username has been taken.');
        } else {
          res.json(results);
        }
        // console.log('results', results);
      });
    }
  }
};
//alter table Variable_Entries add unique (var_id, value);
// 'insert into users ("username") values ("kevin")'