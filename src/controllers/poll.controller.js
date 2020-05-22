import tbPolls from '../models/poll';

export async function deletePollBySession(req, res) {
    const { idsession } = req.params;
    try {
        const deleteRowCount = await tbPolls.destroy({
            where: {
                idsession
            }
        });
        res.json({
            message: "Poll deleted successfully",
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

export async function getPollBySession(req, res) {
    const { idsession } = req.params;
    try {
        const polls = await tbPolls.findAll({
            where: {
                idsession
            }
        });
        res.json({
            data: polls
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
};

export async function getPolls(req, res) {
    try {
        const polls = await tbPolls.findAll();
        res.json({
            data: polls
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
};

export async function getOnePoll(req, res) {
    const { idpoll } = req.params;
    try {
        const poll = await tbPolls.findOne({
            where: {
                id: idpoll
            }
        });
        res.json({
            data: poll
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
};

export async function deletePoll(req, res) {
    const { idpoll } = req.params;
    try {
        const deleteRowCount = await tbPolls.destroy({
            where: {
                id: idpoll
            }
        });
        res.json({
            message: "Poll deleted successfully",
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

export async function updatePoll(req, res) {
    const { idpoll } = req.params;
    const { idsession, topic, starttime, endtime, result, consensus } = req.body;
    try {
        const polls = await tbPolls.findAll({
            //attributes: [idpoll, idsession, topic, starttime, endtime, result, consensus],
            where: {
                id: idpoll
            }
        });
        if (polls.length > 0) {
            polls.forEach(async poll => {
                await poll.update({
                    idsession,
                    topic,
                    starttime,
                    endtime,
                    result,
                    consensus
                });
            });
        }
        res.json({
            message: "Poll updated successfully",
            data: polls
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
};

export async function createPoll(req, res) {
    const { idsession, topic, starttime, endtime, result, consensus } = req.body;
    //await Poll.create(req.body);
    try {
        let newPoll = await tbPolls.create({
            idsession,
            topic,
            starttime,
            endtime,
            result,
            consensus
        });
        if (newPoll) {
            res.json({
                message: 'Poll create successfully',
                data: newPoll
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