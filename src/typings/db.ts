export type Category = {
  id: number;
  name: string;
  slug: string;
  icon: string;
  order: number;
  children: ChildCategory[];
};

export type ChildCategory = {
  id: number;
  name: string;
  slug: string;
  icon: string;
  fullSlug: string;
  order: number;
};

export type Article = {
  id: number;
  publishedAt: string;
  link: string;
  categories: { id: number; name: string; slug: string; fullSlug: string }[];
  author: string;
  title: string;
  content: string;
  thumbnail: string;
  tags: string[];
  bookmark: boolean;
  isRead: boolean;
};
