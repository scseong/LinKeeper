import axios from 'axios';
import { Article } from '@typings/db';

export async function fetchArticles(fetchUrl: string): Promise<Article[]> {
  const result = await axios.get<{ articles: Article[] }>(fetchUrl);
  return result.data.articles;
}
