import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Main, Sidebar } from './layouts';
import { GlobalStyle } from '@styles/GlobalStyle';
import styled from 'styled-components';
import { AuthContextProvider } from '@context/AuthContext';
import { auth } from '@apis/firebase';
import LoadingIndicator from '@components/common/LoadingIndicator';

export default function Root() {
  const [isLoading, setLoading] = useState(true);

  const init = async () => {
    await auth.authStateReady();
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <StLayoutContainer>
      <AuthContextProvider>
        <Header />
        <Sidebar />
        <Main>
          <Outlet />
        </Main>
        <Footer />
        <GlobalStyle />
      </AuthContextProvider>
    </StLayoutContainer>
  );
}

const StLayoutContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: var(--sidebar-width) auto;
  grid-template-rows: var(--header-height) max-content var(--footer-height);
  max-width: var(--max-width);
`;
