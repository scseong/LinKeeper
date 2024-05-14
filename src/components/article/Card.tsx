import { Article } from '@typings/db';
import { Link } from 'react-router-dom';

export default function Card({
  publishedAt,
  link,
  categories,
  author,
  title,
  content,
  thumbnail,
}: Article) {
  return (
    <article>
      <section>
        <Link to={link} target="_blank"></Link>
      </section>
      <figure>
        <img src={thumbnail} alt={`${title}`} />
        <figcaption>썸네일 설명</figcaption>
      </figure>
      <header>
        <h2>{title}</h2>
        <p>{content}</p>
        <div>
          <p>{author}</p>
          <time dateTime={publishedAt}>{publishedAt}</time>
        </div>
      </header>
      <footer>
        <div>
          {categories.map((category) => (
            <Link to={`/topics/${category.fullSlug}`} key={category.id}>
              {category.slug}
            </Link>
          ))}
          {/* TODO: Tags */}
        </div>
        {/* Icons */}
        <div>
          <button>Like</button>
          <button>More</button>
        </div>
      </footer>
    </article>
  );
}
