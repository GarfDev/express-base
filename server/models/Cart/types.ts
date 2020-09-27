import { Document, Model } from 'mongoose';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  count: number;
  checkout: boolean;
  date_added: number;
}

export interface Cart extends Document {
  itemCount: number;
  items: {
    [id: string]: CartItem;
  };
  currency: string;
  itemSubTotalPrice: number;
  originalTotalPrice: number;
  userID?: string;
  sessionID?: string;
}

export interface CartModelType extends Model<Cart> {}
