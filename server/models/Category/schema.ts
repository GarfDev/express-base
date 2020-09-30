import { Schema } from 'mongoose';
import { Category } from './types';

const CategorySchema = new Schema<Category>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

export default CategorySchema;
