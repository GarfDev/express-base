import CartModel, { Cart, initialCart } from '@/models/Cart';

const initCart = async (): Promise<Cart> => {
  const newCart = await CartModel.create({
    ...initialCart,
  });
  return newCart;
};

export default initCart;
