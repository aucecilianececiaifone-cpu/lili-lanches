export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export type PaymentMethod = 'PIX' | 'DINHEIRO' | 'CARTÃO' | null;
