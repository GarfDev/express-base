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
  childOf: {
    type: Schema.Types.ObjectId,
    ref: 'Categories',
  },
  subCategories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Categories',
    },
  ],
});

export default CategorySchema;
