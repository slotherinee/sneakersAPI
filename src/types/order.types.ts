import { Sneaker } from "./sneaker.types";
import { User } from "./user.types";

export enum OrderStatus {
    PENDING = 'PENDING',
    READY = 'READY',
    DELIVERING = 'DELIVERING',
    DELIVERED = 'DELIVERED'
}

export interface Order {
    id: number;
    userId: number;
    sneakerId: number;
    quantity: number;
    status: OrderStatus;
    user: User;
    sneaker: Sneaker;
}