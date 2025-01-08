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