const database = require("../database/config");

module.exports = {
    async create(req, res) {
        const db = await database;

        const password = req.body.password;

        let roomId;

        for(let counter = 0; counter < 6; counter++) {
            counter == 0 ? roomId = Math.floor(Math.random() * 10).toString() : roomId += Math.floor(Math.random() * 10).toString();
        }

        await db.run(`
            INSERT INTO rooms (
                id,
                password
            ) VALUES (
                 
            )
        `);

        await db.close();

        res.redirect(`/room/${roomId}`);
    }
}