const Database = require("../database/config");

module.exports = {
    index(req, res) {
        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const password = req.body.password;
    },

    async create(req, res) {
        const db = await Database();

        const question = req.body.question;
        const roomId = req.params.room;

        await db.run(`
            INSERT INTO questions (
                title,
                room,
                read                
            ) VALUES (
                "${question}",
                ${roomId},
                0
            )
        `);

        res.redirect(`/room/${roomId}`);
    }
}