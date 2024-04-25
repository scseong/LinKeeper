import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import { Category, ChildCategory } from '@typings/db';
import axios from 'axios';

type CategoryContextType = {
  categories: Category[];
  currentMajorCategory?: Category;
  currentSubCategory?: ChildCategory;
};

const CategoryContext = createContext<CategoryContextType | null>(null);

export function CategoryContextProvider({ children }: PropsWithChildren) {
  const [categories, setCategories] = useState<Category[]>([]);
  const { major, sub } = useParams();

  const currentMajorCategory = categories.find(
    (category) => category.slug === major
  );
  const currentSubCategory = currentMajorCategory?.children.find(
    (category) => category.slug === sub
  );

  useEffect(() => {
    async function getCategory() {
      const result = await axios.get('/category.json');
      setCategories(result.data.category);
    }

    getCategory();
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
