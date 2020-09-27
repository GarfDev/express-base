import Cart, { initialCart } from '@/models/Cart';

const initCart = async (sessionID: string): Promise<string> => {
  const newCart = await Cart.create({
    ...initialCart,
    sessionID,
  });
  return newCart._id;
};

export default initCart;
