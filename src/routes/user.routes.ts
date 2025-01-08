import express from 'express';
import { addToFavorite, createUser, deleteUser, getAllUsers, getFavorites, getUserById, updateUser } from '@controllers/user.controller';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.get('/:userId/favorites', getFavorites);
router.post('/', createUser);
router.post('/favorites', addToFavorite)
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;