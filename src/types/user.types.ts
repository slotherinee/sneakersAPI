import { Favorite } from "./favorite.types";
import { Order } from "./order.types";

export interface User {
    id: number;
    username: string;
    password: string;
    isAdmin: boolean;
    orders?: Order[];
    favorites?: Favorite[];
}