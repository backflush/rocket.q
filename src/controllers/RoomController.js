const Database = require("../database/config");

module.exports = {
    async open(req, res) {
        const db = await Database();

        const roomId = req.params.room;

        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} AND read = 0`);

        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} AND read = 1`);

        let isNotQuestions;

        if(questions.length == 0) {
            if(questionsRead.length == 0) {
                isNotQuestions = true;
            }
        }

        res.render("room", {
            roomId: roomId,
            questions: questions,
            questionsRead: questionsRead,
            isNotQuestions: isNotQuestions
        });        
    },

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
    },

    enter(req, res) {
        const roomId = req.body.roomId;

        res.redirect(`/room/${roomId}`);
    }
}