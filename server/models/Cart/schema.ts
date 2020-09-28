import { Schema } from 'mongoose';
import { Cart, CartItems } from './types';

const CartSchema = new Schema<Cart>({
  discounts_applied: {
    type: Array,
    default: [],
  },
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
});

// Schema Pre methods

CartSchema.pre('save', function (next) {
  if (!this.isModified('items')) return next();
  const cartItems = Object.values(this.get('items') as CartItems);
  const cartTotalPrice = cartItems.reduce((value, { count, price }) => value + price * count, 0);
  const cartTotalCount = cartItems.reduce((value, { count }) => value + count, 0);
  // Modify values based on Cart Items
  this.set('itemCount', cartTotalCount);
  this.set('originalTotalPrice', cartTotalPrice);
  this.set('itemSubTotalPrice', cartTotalPrice);
  next();
});

export default CartSchema;
