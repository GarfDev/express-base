import { model } from 'mongoose';
import { Product, ProductModelType } from './types';
import ProductSchema from './schema';

const ProductModel = model<Product, ProductModelType>('Products', ProductSchema);

export default ProductModel;
export type { Product } from './types';
