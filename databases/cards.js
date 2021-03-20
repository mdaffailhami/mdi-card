const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/mdi-card",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => console.error(err)
);

const cards = mongoose.model(
  "card",
  new mongoose.Schema({
    name: String,
    bio: String,
    whatsapp_number: String,
    instagram_username: String,
    telegram_username: String,
    twitter_username: String,
    facebook_url: String,
    youtube_url: String,
  }),
  "cards"
);

module.exports = {
  cards,
};
