export type Category = {
  id: number;
  name: string;
  slug: string;
  icon: string;
  children: ChildCategory[];
};

export type ChildCategory = {
  id: number;
  name: string;
  slug: string;
};
