const { EmbedBuilder, WebhookClient } = require("discord.js");

const webhookClient = new WebhookClient({
  url: "https://discord.com/api/webhooks/1085332401544233101/QrAw0WjCDWvtyqk2x-gv9xksKQ_UGx1cGdlWfv304k5hoPZh4Nt74VFYzASUz7Ay9AQB",
});

module.exports = { webhookClient };
