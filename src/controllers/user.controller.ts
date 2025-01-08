import userService from "@services/user.service";
import { Request, Response } from "express";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.id);
        const user = await userService.getUserById(userId);
        res.json(user);
    } catch (error) {
        res.status(404).json({ message: "User not found" });
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.id);
        const updatedUser = await userService.updateUser(userId, req.body);
        res.json(updatedUser);
    } catch (error) {
        res.status(404).json({ message: "User not found" });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.id);
        await userService.deleteUser(userId);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ message: "User not found" });
    }
};

export const getFavorites = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const favorites = await userService.getUserFavorites(parseInt(userId));
        res.json(favorites);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

export const addToFavorite = async (req: Request, res: Response) => {
    try {
        const { userId, sneakerId } = req.body;
        if (!userId || !sneakerId) {
            res.status(400).json({ error: 'userId and sneakerId are required.' });
          } else {
            const updatedUser = await userService.addToFavorite(+userId, +sneakerId)
            res.json(updatedUser);
            return
          }
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
}; 