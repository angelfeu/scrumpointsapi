import tbSessions from '../models/session';
import tbMembers from '../models/member';

export async function getSessionByIdAndPassword(req, res) {
    const { idsession, password } = req.params;
    try {
        const sessions = await tbSessions.findAll({
            where: {
                id: idsession,
                password: password
            }
        });
        res.json({
            data: sessions
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
};

export async function getSessionsByName(req, res) {
    const { name } = req.params;
    try {
        const sessions = await tbSessions.findAll({
            where: {
                name: name
            }
        });
        res.json({
            data: sessions
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
};

export async function getSessions(req, res) {
    try {
        // init 
        let sessions = [];
        // sessionsall
        let sessionsall = await tbSessions.findAll();
        if (sessionsall.length > 0) {
            // members
            const tbmembers = await tbMembers.findAll({
                order: [
                    ['idsession', 'ASC'],
                    ['id', 'ASC']
                ]
            });
            sessionsall.forEach(async sess => {
                let members = 0;
                let session = {};
                tbmembers.forEach(member => {
                    if (sess.id === member.idsession) members = members + 1;
                });
                session.id = sess.id;
                session.name = sess.name;
                session.cardset = sess.cardset;
                session.isprivate = sess.isprivate;
                session.password = sess.password;
                session.lastaction = sess.lastaction;
                session.members = sess.members;
                session.members = members;
                sessions.push(session);
            });
        }
        res.json({
            data: sessions
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
};

export async function getOneSession(req, res) {
    const { idsession } = req.params;
    try {
        const session = await tbSessions.findOne({
            //attributes: [id, name, cardset, isprivate, lastaction],
            where: {
                id: idsession
            }
        });
        res.json({
            data: session
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
};

export async function deleteSession(req, res) {
    const { idsession } = req.params;
    try {
        const deleteRowCount = await tbSessions.destroy({
            where: {
                id: idsession
            }
        });
        res.json({
            message: "Session deleted successfully",
            count: deleteRowCount
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
};

export async function updateSession(req, res) {
    const { idsession } = req.params;
    const { name, cardset, isprivate, password, lastaction } = req.body;
    try {
        const sessions = await tbSessions.findAll({
            //attributes: [idsession, name, cardset, isprivate, password, lastaction],
            where: {
                id: idsession
            }
        });
        if (sessions.length > 0) {
            sessions.forEach(async session => {
                await session.update({
                    name,
                    cardset,
                    isprivate,
                    password,
                    lastaction
                });
            });
        }
        res.json({
            message: "Session updated successfully",
            data: sessions
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
};

export async function createSession(req, res) {
    const { name, cardset, isprivate, password } = req.body;
    //await Session.create(req.body);
    try {
        let newSession = await tbSessions.create({
            name,
            cardset,
            isprivate,
            password
        });
        if (newSession) {
            res.json({
                message: 'Session create successfully',
                data: newSession
            });
        }
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
};