import { Router } from 'express';
import { initCart, restoreCart } from '@/controllers/cart';

const cart = Router();

cart.get('/get', async (req, res) => {
  const cartID = req.signedCookies['cart_id'];
  const previousCart = await restoreCart(cartID);
  // Init new cart if not have
  if (!previousCart) {
    const newCart = await initCart();
    res.cookie('cart_id', newCart._id, { signed: true });
    return res.send(newCart.toJSON());
  }
  // Return previous information about cart
  // console.log(previousCart);
  return res.send(previousCart.toJSON());
});

export default cart;
