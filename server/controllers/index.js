var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {

      models.messages.get(req, res);
    }, // a function which handles a get request for all messages
    post: function (req, res) { // a function which handles posting a message to the database
      models.messages.post(req, res);
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      models.users.post(req, res);
    }
  }
};