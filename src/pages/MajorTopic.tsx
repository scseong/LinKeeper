import { useCategories } from '@context/CategoryContext';
import styled from 'styled-components';

export default function MajorTopic() {
  const { currentMajorCategory } = useCategories();

  if (!currentMajorCategory) return null;

  return (
    <section>
      <div>
        <StMajorTitle>{currentMajorCategory!.name}</StMajorTitle>
      </div>
    </section>
  );
}

const StMajorTitle = styled.h2`
  font-size: 2rem;
  line-height: 2.4rem;
`;
