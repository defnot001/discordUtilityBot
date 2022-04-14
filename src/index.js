const { Client, Intents } = require("discord.js");
const { token } = require("../config.json");

const client = new Client({ intents: 36417 });

client.once("ready", () => {
  console.log("The bot is ready!");
});

client.login(token);
