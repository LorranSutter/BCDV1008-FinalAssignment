const moment = require('moment');

// TODO This if this file is necessary

function formatMessage(username, text) {
  return {
    username, text, time: moment().format('h:mm a')
  };
}

module.exports = formatMessage;