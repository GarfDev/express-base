import { Document, Model } from 'mongoose';
import { Category } from '@/models/Category/types';

export interface Product extends Document {
  name: string;
  price: number;
  stock: number;
  description: string;
  categories: Category[];
  pictures: string[];
}

export interface ProductModelType extends Model<Product> {}
