import CartModel from '@/models/Cart';
import { CartItems } from '@/models/Cart/types';

const updateCart = async (id: string, newItems: CartItems) => {
  const cart = await CartModel.findById(id);
  if (!cart) return null;
  /*
   * Validate Cart Items
   */
  const itemIds = Object.keys(newItems);
  // const newItems = itemIds.map((id) => )
  // Create new Cart Items
  const cartItems = {
    ...newItems,
  };
  // Applying Business Logics
  // <<==
  // Set new Cart Items
  cart.set('items', cartItems);
  cart.save();
};

export default updateCart;
