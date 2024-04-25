import { useCategories } from '@context/CategoryContext';
import styled from 'styled-components';
import LogoIcon from '@assets/logo.svg';

export default function SubTopic() {
  const { currentSubCategory } = useCategories();
  const category = currentSubCategory?.name;
  const categoryIcon = currentSubCategory?.icon;

  if (!currentSubCategory) return null;

  return (
    <section>
      <StSectionTitle>
        {!categoryIcon && <LogoIcon />}
        {categoryIcon && (
          <img src={`${categoryIcon}`} alt={`${category}-icon`} />
        )}
        <h2>{category}</h2>
      </StSectionTitle>
    </section>
  );
}

const StSectionTitle = styled.div`
  display: flex;
  align-items: center;
  user-select: none;

  svg {
    margin-right: 1rem;
    width: 3rem;
    height: 3rem;
    fill: black;
  }

  img {
    margin-right: 1rem;
    width: 3rem;
    height: 3rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }
`;
