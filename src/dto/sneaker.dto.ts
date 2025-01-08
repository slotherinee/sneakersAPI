export interface CreateSneakerDto {
    name: string;
    brand: string;
    price: number;
    stock: number;
    imageUrl: string;
  }
  
  export interface UpdateSneakerDto {
    name?: string;
    brand?: string;
    price?: number;
    stock?: number;
    imageUrl?: string;
  }