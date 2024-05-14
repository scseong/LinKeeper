import { useCategories } from '@context/CategoryContext';
import styled from 'styled-components';
import CardContainer from '@components/article/CardContainer';

export default function MajorTopic() {
  const { currentMajorCategory } = useCategories();

  if (!currentMajorCategory) return null;

  return (
    <section>
      <div>
        <StMajorTitle>{currentMajorCategory!.name}</StMajorTitle>
      </div>
      <CardContainer />
    </section>
  );
}

const StMajorTitle = styled.h2`
  font-size: 2rem;
  line-height: 2.4rem;
`;
