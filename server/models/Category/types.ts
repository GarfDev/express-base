import { Document, Model } from 'mongoose';

export interface Category extends Document {
  name: string;
  description: string;
}
export interface CategoryModelType extends Model<Category> {}
