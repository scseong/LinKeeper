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
