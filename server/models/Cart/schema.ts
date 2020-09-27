import { Schema } from 'mongoose';
import { Cart } from './types';

const CartSchema = new Schema<Cart>({
  itemCount: {
    type: Number,
    default: 0,
  },
  items: {
    type: Schema.Types.Mixed,
    default: {},
  },
  currency: {
    type: String,
  },
  itemSubTotalPrice: {
    type: Number,
    default: 0,
  },
  originalTotalPrice: {
    type: Number,
    default: 0,
  },
  userID: {
    type: String,
  },
  sessionID: {
    type: String,
  },
});

export default CartSchema;
