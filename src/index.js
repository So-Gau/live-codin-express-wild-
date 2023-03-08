const express = require("express");
const dataSource = require("./utils").dataSource;
const wilderController = require("./controller/WilderController")
const skillController = require("./controller/SkillController")

const app = express();


// Lecture du json
app.use(express.json());

//ROUTE
app.get("/", (req, res) =>{
    res.send("Hello World");
});

// for api wilder
app.post("/api/wilder", wilderController.create);
app.get("/api/wilder", wilderController.read);
app.delete("/api/wilder/:id", wilderController.delete);
app.put("/api/wilder/:id", wilderController.update);

//for api skill
app.post("/api/skill", skillController.create);
app.get("/api/skill", skillController.read);
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