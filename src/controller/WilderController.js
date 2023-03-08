const Skill = require("../entity/Skill");
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
            res.send("Error while read the wilder");
        }
    },
    //methods delete
    delete: async (req, res) => {
        try {
            const deleteWilder = await dataSource.getRepository(Wilder).delete(req.params.id);
            res.send(deleteWilder);
        } catch (err) {
            console.log(err);
            res.send("Error while deleted the wilder")
        }
    },
    //methods update
    update: async (req, res) => {
        try {
            const upWilder = await dataSource
            .getRepository(Wilder)
            .update(req.params.id, req.body);
            res.send(upWilder);
        } catch (err) {
            console.log(err)
            res.send("Error while update the wilder")
        }
    },
    //methods addskill
    addSkill: async (req, res) => {
        try {
            const wilderToUpdate = await dataSource
                .getRepository(Wilder)
                .findOneByOrFail({ name: req.body.wilderName});
            console.log("wilder", wilderToUpdate);
            const skillToAdd = await dataSource
                .getRepository(Skill)
                .findOneByOrFail({ name: req.body.skillName });
            wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd];
            await dataSource.getRepository(Wilder).save(wilderToUpdate);
            res.send("Skill added to wilder");
        } catch (err) {
            console.log(err);
            res.send("error while adding skill to wilder");
        }
    },
};