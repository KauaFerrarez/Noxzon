const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/noxzon");

const db = mongoose.connection;

db.on("error", (error) => {
    console.log("Erro ao conectar no MongoDB:", error);
});

db.once("open", () => {
    console.log("MongoDB conectado com sucesso.");
});

module.exports = db;