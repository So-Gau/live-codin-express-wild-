const Skill = require("../entity/Skill");
const dataSource = require("../utils").dataSource;

module.exports = {
    //methods create
    create: (req, res) => {
        dataSource
        .getRepository(Skill)
        .save(req.body)
        .then(() => {
            res.send("Created Skill");
        })
        .catch(() => {
            res.send("Error while creating the skill");
        });
    },
    //methods read
    read: async (req, res) => {
        try {
            const allSkills = await dataSource.getRepository(Skill).find();
            res.send(allSkills);
        } catch (err) {
            console.log(err);
            res.send("Error while read the skill");
        }
    },
    //methods delete
    delete: async (req, res) => {
        try {
            const deleteSkill = await dataSource.getRepository(Skill).delete(req.params.id);
            res.send(deleteSkill);
        } catch (err) {
            console.log(err);
            res.send("Error while deleted the skill")
        }
    },
    //methods update
    update: async (req, res) => {
        try {
            const upSkill = await dataSource
            .getRepository(Skill)
            .update(req.params.id, req.body);
            res.send(upSkill);
        } catch (err) {
            console.log(err)
            res.send("Error while update the skill")
        }
    },
};