import { Request, Response } from 'express';
import sneakerService from '@services/sneaker.service';

export const getAllSneakers = async (req: Request, res: Response) => {
    try {
        const sneakers = await sneakerService.getAllSneakers();
        res.json(sneakers);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

export const getSingleSneaker = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const sneaker = await sneakerService.getSingleSneaker(parseInt(id, 10));
        if (sneaker) {
          res.json(sneaker);
        } else {
          res.status(404).json({ error: 'Sneaker not found' });
        }
      } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

export const createSneaker = async (req: Request, res: Response) => {
    try {
        const createdSneaker = await sneakerService.createSneaker(req.body);
        res.status(201).json(createdSneaker);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

export const updateSneaker = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedSneaker = await sneakerService.updateSneaker(parseInt(id, 10), req.body);
        if (updatedSneaker) {
          res.json(updatedSneaker);
        } else {
          res.status(404).json({ error: 'Sneaker not found' });
        }
      } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

export const deleteSneaker = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id, 10);
        const deletedSneaker = await sneakerService.deleteSneaker(id);
        if (deletedSneaker) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Sneaker not found' });
        }
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};