import axios from 'axios';
import { Category } from '@typings/db';

export async function fetchCategories(fetchUrl: string): Promise<Category[]> {
  const result = await axios.get<{ category: Category[] }>(fetchUrl);
  return result.data.category;
}
