import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { Category, ChildCategory } from '@typings/db';
import { fetchCategories } from '@apis/categories';

type CategoryContextType = {
  categories: Category[];
  currentMajorCategory?: Category;
  currentSubCategory?: ChildCategory;
};

const CategoryContext = createContext<CategoryContextType | null>(null);

export function CategoryContextProvider({ children }: PropsWithChildren) {
  const [categories, setCategories] = useState<Category[]>([]);
  const { currentMajorCategory, currentSubCategory } =
    useCategorySelection(categories);

  useEffect(() => {
    async function getCategories() {
      const categories = await fetchCategories('/category.json');
      setCategories(categories);
    }

    getCategories();
  }, []);

  return (
    <CategoryContext.Provider
      value={{ categories, currentMajorCategory, currentSubCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export const useCategories = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('Cannot find CategoryProvider');
  }
  return context;
};

function findCategoryBySlug<T extends Category | ChildCategory>(
  categories: T[],
  slug?: string
): T | undefined {
  if (typeof slug === 'undefined') return;
  return categories.find((category) => category.slug === slug);
}

const useCategorySelection = (categories: Category[]) => {
  const { major, sub } = useParams();

  const currentMajorCategory = findCategoryBySlug(categories, major);
  const currentSubCategory = currentMajorCategory?.children
    ? findCategoryBySlug(currentMajorCategory.children, sub)
    : undefined;

  return { currentMajorCategory, currentSubCategory };
};
