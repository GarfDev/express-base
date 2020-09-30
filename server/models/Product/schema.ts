import { Schema } from 'mongoose';
import { Product } from './types';

const ProductSchema = new Schema<Product>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
  categories: [{ type: Schema.Types.ObjectId, ref: 'Categories' }],
});

export default ProductSchema;
