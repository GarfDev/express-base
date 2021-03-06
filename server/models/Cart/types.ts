import { Document, Model } from 'mongoose';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  count: number;
  checkout: boolean;
  addedAt: number;
}

export interface CartItems {
  [id: string]: CartItem;
}

export interface Cart extends Document {
  discounts_applied: string[];
  itemCount: number;
  items: CartItems;
  currency: string;
  itemSubTotalPrice: number;
  originalTotalPrice: number;
  userID?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CartModelType extends Model<Cart> {}
