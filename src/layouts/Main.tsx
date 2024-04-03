import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export default function Main({ children }: PropsWithChildren) {
  return <StMain>{children}</StMain>;
}

const StMain = styled.main`
  padding: 0 1rem ${({ theme }) => theme.footerHeight} 1rem;
  grid-column: 2;
  grid-row: 2 / -1;
  min-height: calc(100vh - ${({ theme }) => theme.headerHeight});
`;
