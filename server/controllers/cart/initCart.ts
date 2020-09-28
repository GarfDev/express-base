import Cart, { initialCart } from '@/models/Cart';

const initCart = async (): Promise<string> => {
  const newCart = await Cart.create({
    ...initialCart,
  });
  return newCart._id;
};

export default initCart;
