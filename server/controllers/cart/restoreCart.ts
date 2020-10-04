import CartModel, { Cart } from '@/models/Cart';

const restoreCart = async (cartID: string): Promise<Cart | null> => {
  const cart = await CartModel.findById(cartID).findOne();
  return cart;
};

export default restoreCart;
