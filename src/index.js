const express = require("express");
const dataSource = require("./utils").dataSource;
const wilderController = require("./controller/WilderController")

const app = express();


// Lecture du json
app.use(express.json());

//ROUTE
app.get("/", (req, res) =>{
    res.send("Hello World");
});

app.post("/api/wilder", wilderController.create);
app.get("/api/wilder", wilderController.read);
app.delete("/api/wilder", wilderController.delete);
app.put("/api/wilder", wilderController.update);


//start
const start = async () => {
    await dataSource.initialize();
};

app.listen(3000, () => {
    console.log("Server started");
});

start()