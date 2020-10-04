import { Document, Model } from 'mongoose';

export interface Category extends Document {
  name: string;
  description: string;
  childOf?: Category;
  subCategories?: Category[];
}
export interface CategoryModelType extends Model<Category> {}
