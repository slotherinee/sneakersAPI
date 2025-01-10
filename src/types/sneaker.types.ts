import { Favorite } from "./favorite.types";
import { Order } from "./order.types";

export interface Sneaker {
    id: number;
    name: string;
    brand: string;
    price: number;
    stock: number;
    imageUrl: string;
    orders?: Order[];
    favoritedBy?: Favorite[];
}