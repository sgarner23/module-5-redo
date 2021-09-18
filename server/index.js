const express = require("express");
const cors = require("cors");

const app = express();

const ctrl = require ('./controller')

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON


app.get("/api/fortune", ctrl.sendFortune)
app.get("/api/zodiac", ctrl.getStephensZodiacSign)
app.post("/api/reset", ctrl.addReset)
app.get("/api/my-resets", ctrl.sendResetsArr)
const port = 4000;

app.listen(port, () => console.log("Beam me up Scotty!"))