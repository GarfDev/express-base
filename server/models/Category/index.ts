import { model } from 'mongoose';
import { Category, CategoryModelType } from './types';
import CategorySchema from './schema';

const CategoryModel = model<Category, CategoryModelType>('Categories', CategorySchema);

export default CategoryModel;
export type { Category } from './types';
