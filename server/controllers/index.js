var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {

      models.messages.get(req, res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      // console.log(req.body);
      // req.on('error', function(err) {
      //   console.log('err', err);
      // }).on('data', function(chunk) {
      //   console.log('data', chunk);
      // });
      models.users.post(req, res);
    }
  }
};