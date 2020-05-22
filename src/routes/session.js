import { Router } from 'express';
const router = Router();

import {
    createSession,
    getSessions,
    getOneSession,
    deleteSession,
    updateSession,
    getSessionsByName,
    getSessionByIdAndPassword
} from '../controllers/session.controller';

// /api/session
router.post('/', createSession);
router.get('/', getSessions);

// /api/session/:idsession
router.get('/:idsession', getOneSession);
router.delete('/:idsession', deleteSession);
router.put('/:idsession', updateSession);

// /api/session/name/:name
router.get('/name/:name', getSessionsByName);

// /api/session/:idsession/password/:password
router.get('/:idsession/password/:password', getSessionByIdAndPassword);

// /api/session/all/:idsession
//router.get('/:idsession', deleteSessionAll);

export default router;