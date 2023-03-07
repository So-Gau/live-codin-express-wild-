const Wilder = require("../entity/Wilder");
const dataSource = require("../utils").dataSource;

module.exports = {
    //methods create
    create: (req, res) => {
        dataSource
        .getRepository(Wilder)
        .save(req.body)
        .then(() => {
            res.send("Created Wilder");
        })
        .catch(() => {
            res.send("Error while creating the wilder");
        });
    },
    //methods read
    read: async (req, res) => {
        try {
            const allWilders = await dataSource.getRepository(Wilder).find();
            res.send(allWilders);
        } catch (err) {
            console.log(err);
            res.send("Error while creating the wilder");
        }
    },
    //methods delete
    delete: async (req, res) => {
        try {
            const deleteWilder = await dataSource.getRepository(Wilder).delete([1])
            res.send(deleteWilder);
        } catch (err) {
            console.log(err);
            res.send("Error while deleted the wilder")
        }
    },
    //methods update
    update: async (req, res) => {
        try {
            const upWilder = await dataSource.getRepository(Wilder).update(2, { name: "Rizzrak" })
            res.send(upWilder);
        } catch (err) {
            console.log(err)
            res.send("Error while update the wilder")
        }
    },
};