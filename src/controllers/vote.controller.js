import tbVotes from '../models/vote';
import tbMembers from '../models/member';

export async function deleteVotesBySession(req, res) {
    const { idsession } = req.params;
    try {
        let deleteRowsCount = 0;
        const members = await tbMembers.findAll({
            where: {
                idsession
            }
        });
        if (members.length > 0) {
            members.forEach(async member => {
                const deleteRowCount = await tbVotes.destroy({
                    where: {
                        idmember: member.id
                    }
                });
                deleteRowsCount = deleteRowsCount + deleteRowCount;
            });
        }
        res.json({
            message: "Votes deleted successfully",
            count: deleteRowsCount
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
};

export async function getVotesBySession(req, res) {
    const { idsession } = req.params;
    try {
        const votes = [];
        const members = await tbMembers.findAll({
            where: {
                idsession
            }
        });
        if (members.length > 0) {
            const votemembers = await tbVotes.findAll();
            members.forEach(async member => {
                let vote = {};
                vote.name = member.name;
                vote.memberid = member.id;
                vote.value = '';
                votemembers.forEach(async votemember => {
                    if (votemember.idmember === member.id) vote.value = votemember.value;
                });
                votes.push(vote);
            });
        }
        res.json({
            data: votes
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
};

export async function deleteVoteByMember(req, res) {
    const { idmember } = req.params;
    try {
        const deleteRowCount = await tbVotes.destroy({
            where: {
                idmember
            }
        });
        res.json({
            message: "Vote deleted successfully",
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

export async function getVoteByMember(req, res) {
    const { idmember } = req.params;
    try {
        const votes = await tbVotes.findAll({
            where: {
                idmember
            }
        });
        res.json({
            data: votes
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
};

export async function getVotes(req, res) {
    try {
        const votes = await tbVotes.findAll();
        res.json({
            data: votes
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
};

export async function getOneVote(req, res) {
    const { idvote } = req.params;
    try {
        const vote = await tbVotes.findOne({
            where: {
                id: idvote
            }
        });
        res.json({
            data: vote
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
};

export async function deleteVote(req, res) {
    const { idvote } = req.params;
    try {
        const deleteRowCount = await tbVotes.destroy({
            where: {
                id: idvote
            }
        });
        res.json({
            message: "Vote deleted successfully",
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

export async function updateVote(req, res) {
    const { idvote } = req.params;
    const { idmember, value } = req.body;
    try {
        const votes = await tbVotes.findAll({
            //attributes: [idvote, idmember, value],
            where: {
                id: idvote
            }
        });
        if (votes.length > 0) {
            votes.forEach(async vote => {
                await vote.update({
                    idmember,
                    value
                });
            });
        }
        res.json({
            message: "Vote updated successfully",
            data: votes
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
};

export async function createVote(req, res) {
    const { idmember, value } = req.body;
    //await Vote.create(req.body);
    try {
        let newVote = await tbVotes.create({
            idmember,
            value
        });
        if (newVote) {
            res.json({
                message: 'Vote create successfully',
                data: newVote
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