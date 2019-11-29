const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const config = require('../config.json');

var prefix = config.prefix;


module.exports = client => {
  console.log(`${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("dnd");
  console.log(`                                                                                                                                                                     `)
  client.user.setActivity(`${prefix}help | ${client.guilds.size} Server | ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Users`, { type: "WATCHİNG"});
  console.log(`${client.user.username}: ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` Serving the User`);
};
