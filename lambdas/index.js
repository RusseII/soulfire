/* eslint-disable no-console */
var rs = require("runescape-api")


const executeMongo = async (event, context, callback) => {
  const members = await rs.clan.getMembers("Soulfire")

  return callback(null, {status: 200, body: members})
};

module.exports.handler = executeMongo;

