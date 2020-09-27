import { Cart, CartModelType } from './types';
import { model } from 'mongoose';
import CartSchema from './schema';

const CartModel = model<Cart, CartModelType>('Cart', CartSchema);

export default CartModel;
export type { Cart } from './types';
export { initialCart } from './constants';
