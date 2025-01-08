import { createSneaker, deleteSneaker, getAllSneakers, getSingleSneaker, updateSneaker } from '@controllers/sneaker.controller';
import express from 'express';

const router = express.Router();

router.get('/', getAllSneakers);
router.get('/:id', getSingleSneaker);
router.post('/', createSneaker);
router.put('/:id', updateSneaker);
router.delete('/:id', deleteSneaker);

export default router;