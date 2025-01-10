import { Sneaker } from "./sneaker.types";
import { User } from "./user.types";

export interface Favorite {
    id: number;
    userId: number;
    sneakerId: number;
    sneaker: Sneaker;
}