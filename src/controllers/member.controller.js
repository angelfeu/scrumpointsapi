import tbMembers from '../models/member';
import tbVotes from '../models/vote';

export async function deleteMembersBySession(req, res) {
    const { idsession } = req.params;
    try {
        const deleteRowCount = await tbMembers.destroy({
            where: {
                idsession
            }
        });
        res.json({
            message: "Members deleted successfully",
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

export async function getMembersBySessionAndName(req, res) {
    const { idsession, name } = req.params;
    try {
        const members = await tbMembers.findAll({
            //attributes: [idmember, idsession, name],
            where: {
                idsession: idsession,
                name: name
            }
        });
        res.json({
            data: members
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
};

export async function getMembersBySession(req, res) {
    const { idsession } = req.params;
    try {
        const members = await tbMembers.findAll({
            where: {
                idsession
            }
        });
        res.json({
            data: members
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
};

export async function getMembers(req, res) {
    try {
        const members = await tbMembers.findAll();
        res.json({
            data: members
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
};

export async function getOneMember(req, res) {
    const { idmember } = req.params;
    try {
        const member = await tbMembers.findOne({
            where: {
                id: idmember
            }
        });
        res.json({
            data: member
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
};

export async function deleteMember(req, res) {
    const { idmember } = req.params;
    try {
        // votes
        await tbVotes.destroy({
            where: {
                idmember: idmember
            }
        });
        const deleteRowCount = await tbMembers.destroy({
            where: {
                id: idmember
            }
        });
        res.json({
            message: "Member deleted successfully",
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

export async function updateMember(req, res) {
    const { idmember } = req.params;
    const { idsession, name } = req.body;
    try {
        const members = await tbMembers.findAll({
            //attributes: [idmember, name, cardset, isprivate, password, lastaction],
            where: {
                id: idmember
            }
        });
        if (members.length > 0) {
            members.forEach(async member => {
                await member.update({
                    idsession,
                    name
                });
            });
        }
        res.json({
            message: "Member updated successfully",
            data: members
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'something goes wrong',
            data: {}
        });
    }
};

export async function createMember(req, res) {
    const { id, idsession, name } = req.body;
    //await Member.create(req.body);
    try {
        let newMember = await tbMembers.create({
            id,
            idsession,
            name
        });
        if (newMember) {
            res.json({
                message: 'Member create successfully',
                data: newMember
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