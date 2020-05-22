import { Router } from 'express';
const router = Router();

import {
    getCardSets,
    getOneCardSet
} from '../controllers/cardset.controller';

// /api/cardset
router.get('/', getCardSets);

// /api/cardset/:name
router.get('/:name', getOneCardSet);

export default router;