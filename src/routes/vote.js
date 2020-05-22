import { Router } from 'express';
const router = Router();

import {
    createVote,
    getVotes,
    getOneVote,
    deleteVote,
    updateVote,
    getVoteByMember,
    deleteVoteByMember,
    getVotesBySession,
    deleteVotesBySession
} from '../controllers/vote.controller';

// /api/vote
router.post('/', createVote);
router.get('/', getVotes);

// /api/vote/:id
router.get('/:idvote', getOneVote);
router.delete('/:idvote', deleteVote);
router.put('/:idvote', updateVote);

// /api/vote/member/:idmember
router.get('/member/:idmember', getVoteByMember);
router.delete('/member/:idmember', deleteVoteByMember);

// /api/vote/session/:idsession
router.get('/session/:idsession', getVotesBySession);
router.delete('/session/:idsession', deleteVotesBySession);

export default router;