import { Router } from 'express';
const router = Router();

import {
    createPoll,
    getPolls,
    getOnePoll,
    deletePoll,
    updatePoll,
    getPollBySession,
    deletePollBySession
} from '../controllers/poll.controller';

// /api/poll
router.post('/', createPoll);
router.get('/', getPolls);

// /api/poll/:idpoll
router.get('/:idpoll', getOnePoll);
router.delete('/:idpoll', deletePoll);
router.put('/:idpoll', updatePoll);

// /api/poll/session/:idsession
router.get('/session/:idsession', getPollBySession);
router.delete('/session/:idsession', deletePollBySession);

export default router;