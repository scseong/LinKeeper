import { Outlet } from 'react-router-dom';
import { Footer, Header, Main, Sidebar } from './layouts';
import { GlobalStyle } from '@styles/GlobalStyle';
import styled from 'styled-components';

export default function Root() {
  return (
    <LayoutContainer>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <GlobalStyle />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: var(--sidebar-width) auto;
  grid-template-rows: var(--header-height) max-content var(--footer-height);
  max-width: var(--max-width);
`;
