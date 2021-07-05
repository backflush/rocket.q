const database = require("../database/config");

module.exports = {
    async create(req, res) {
        const db = await Database();

        const password = req.body.password;

        let roomId;
        let isRoom = true;

        while(isRoom) {
            for(let counter = 0; counter < 6; counter++) {
                counter == 0 ? roomId = Math.floor(Math.random() * 10).toString() : roomId += Math.floor(Math.random() * 10).toString();
            }
    
            const roomsExistIds = await db.all(`SELECT id FROM rooms`);
    
            isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId);
    
            if(!isRoom) {
                await db.run(`
                    INSERT INTO rooms (
                        id,
                        password
                    ) VALUES (
                        ${parseInt(roomId)},
                        ${password}
                    )
                `);
            }
        }

        await db.close();

        res.redirect(`/room/${roomId}`);
    }
}