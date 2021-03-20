require("dotenv").config({ path: __dirname + "/.env" });
const path = require("path");
const express = require("express");
const database = require("./databases/cards");

const app = express();

app.get("/api/card/:card__id", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const { card__id } = req.params;

  const card = await database.cards
    .findById(card__id)
    .then((doc) => res.json({ status: true, message: "Card ditemukan!", card: doc }))
    .catch((err) => res.json({ status: false, message: "Card tidak ditemukan!" }));

  // res.json(card);
});

app.post("/api/card", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  req.on("data", async (chunk) => {
    const data = JSON.parse(String(chunk));

    /* 
      ! Aturan-aturan ngebuat card
    */
    // 1. nama wajib ada
    if (data.name == "") return res.json({ status: false, message: "Nama tidak boleh kosong!" });

    // 2. Nama maksimal 50 karakter
    if (data.name.length > 50)
      return res.json({ status: false, message: "Nama tidak boleh lebih dari 50 karakter!" });

    // 3. bio maksimal 200 karakter
    if (data.bio.length > 200)
      return res.json({ status: false, message: "Bio tidak boleh lebih dari 200 karakter!" });

    // 4. Socmed wajib ada minimal 1
    if (
      data.whatsapp_number == "" &&
      data.instagram_username == "" &&
      data.telegram_username == "" &&
      data.twitter_username == "" &&
      data.facebook_url == "" &&
      data.youtube_url == ""
    ) {
      return res.json({ status: false, message: "Sosmed harus ada minimal satu!" });
    }

    for (let property in data) {
      // 4. Socmed maksimal 150 karakter
      if (data[property].length > 150)
        return res.json({
          status: false,
          message: "Masukin sosmed yang bener lurr, masa panjang bet gitu :v",
        });

      // 5. Jika bio atau socmed kosong maka ubah nilainya jadi null
      if (data[property] == "") data[property] = null;
    }

    const {
      name,
      bio,
      whatsapp_number,
      instagram_username,
      telegram_username,
      twitter_username,
      facebook_url,
      youtube_url,
    } = data;

    const card = await database.cards
      .create({
        name,
        bio,
        whatsapp_number,
        instagram_username,
        telegram_username,
        twitter_username,
        facebook_url,
        youtube_url,
      })
      .then((doc) => doc)
      .catch((err) => console.error(err));

    console.log("POST ==> api/card:\n", card);

    res.json({
      status: true,
      message: "Card created!",
      card_url: process.env.FRONTEND_URL + "/card/" + card._id,
      card,
    });
  });
});

app.all("*", (req, res) => res.redirect(process.env.FRONTEND_URL));
// app.use(express.static(__dirname + "/../frontend/build"));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname + "/../frontend/build/index.html"));
// });

const port = process.env.PORT || 1234;
app.listen(port, () => console.log("Server is running on port", port));
