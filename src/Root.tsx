import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Main, Sidebar } from './layouts';
import { GlobalStyle } from '@styles/GlobalStyle';
import styled, { ThemeProvider } from 'styled-components';
import { AuthContextProvider } from '@context/AuthContext';
import { auth } from '@apis/firebase';
import LoadingIndicator from '@components/common/LoadingIndicator';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { theme } from '@styles/theme';
import { CategoryContextProvider } from '@context/CategoryContext';

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
    <AuthContextProvider>
      <CategoryContextProvider>
        <ThemeProvider theme={theme}>
          <StLayoutContainer>
            <Header />
            <Sidebar />
            <Main>
              <Outlet />
            </Main>
            <Footer />
            <GlobalStyle />
            <ToastContainer />
          </StLayoutContainer>
        </ThemeProvider>
      </CategoryContextProvider>
    </AuthContextProvider>
  );
}

const StLayoutContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: ${({ theme }) => theme.sidebarWidth} auto;
  grid-template-rows: ${({ theme }) => theme.headerHeight} max-content ${({
      theme,
    }) => theme.footerHeight};
  max-width: ${({ theme }) => theme.maxWidth};
`;
