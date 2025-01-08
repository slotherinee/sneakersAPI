import { OrderStatus } from '@prisma/client';

export interface CreateOrderDto {
  userId: number;
  sneakerId: number;
  quantity: number;
}

export interface UpdateOrderDto {
  quantity?: number;
  status?: OrderStatus;
}