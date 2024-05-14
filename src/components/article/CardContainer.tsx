import { useEffect, useState } from 'react';
import { fetchArticles } from '@apis/articles';
import Card from './Card';
import { Article } from '@typings/db';

export default function CardContainer() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function getArticles() {
      const articles = await fetchArticles('/article.json');
      setArticles(articles);
    }

    getArticles();
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <Card
          key={article.id}
          id={article.id}
          publishedAt={article.publishedAt}
          link={article.link}
          categories={article.categories}
          author={article.author}
          title={article.title}
          content={article.content}
          thumbnail={article.thumbnail}
          tags={article.tags}
          bookmark={article.bookmark}
          isRead={article.isRead}
        />
      ))}
    </div>
  );
}
