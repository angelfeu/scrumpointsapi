import { Router } from 'express';
const router = Router();

import {
    createMember,
    getMembers,
    getOneMember,
    deleteMember,
    updateMember,
    getMembersBySession,
    deleteMembersBySession,
    getMembersBySessionAndName
} from '../controllers/member.controller';

// /api/member
router.post('/', createMember);
router.get('/', getMembers);

// /api/member/:idmember
router.get('/:idmember', getOneMember);
router.delete('/:idmember', deleteMember);
router.put('/:idmember', updateMember);

// /api/member/session/:idsession
router.get('/session/:idsession', getMembersBySession);
router.delete('/session/:idsession', deleteMembersBySession);

// /api/member/session/:idsession/name/:name
router.get('/session/:idsession/name/:name', getMembersBySessionAndName);

export default router;