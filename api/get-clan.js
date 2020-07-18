/* eslint-disable no-console */
var rs = require("runescape-api")

export default async (req, res) => {
    const members = await rs.clan.getMembers("Soulfire")
    res.json({body: members})
  }