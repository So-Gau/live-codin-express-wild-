const express = require("express");
const cors = require("cors");
const dataSource = require("./utils").dataSource;
const wilderController = require("./controller/WilderController")
const skillController = require("./controller/SkillController")

const app = express();


// Lecture du json
app.use(express.json());

// gérer les requêtes CORS sur votre serveur et de vous assurer que votre application peut accéder aux ressources distantes de manière sécurisée.
app.use(cors());

//ROUTE
app.get("/", (req, res) =>{
    res.send("Hello World");
});

// lecture dans l'ordre des routes
app.post("/api/wilder", wilderController.create);
app.post("/api/skill", skillController.create);
app.get("/api/wilder", wilderController.read);
app.put("/api/wilder/addskill", wilderController.addSkills);
app.get("/api/skill", skillController.read);

app.put("/api/wilder/:id", wilderController.update);
app.delete("/api/wilder/:id", wilderController.delete);
app.delete("/api/skill/:id", skillController.delete);
app.put("/api/skill/:id", skillController.update);



//start
const start = async () => {
    await dataSource.initialize();
};

app.listen(3000, () => {
    console.log("Server started");
});

start()