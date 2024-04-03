import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoSearchOutline, IoBookmarkOutline } from 'react-icons/io5';
import { blindStyle } from '@styles/GlobalStyle';
import LogoIcon from '@assets/logo.svg';
import Profile from '@components/profile/Profile';
import { useAuthContext } from '@context/AuthContext';
import { useToast } from '@hooks/useToast';

export default function Header() {
  const { user, login, logout } = useAuthContext();
  const { successTopRight } = useToast();

  const handleLogin = async () => {
    await login();
    successTopRight({ message: '로그인 되었습니다.' });
  };

  const handleLogout = async () => {
    await logout();
    successTopRight({ message: '로그아웃 되었습니다.' });
  };

  return (
    <StHeader>
      <StWrapper>
        <StLogo>
          <Link to="/">
            <LogoIcon />
            <h1>linkeeper</h1>
          </Link>
        </StLogo>
        <StSubMenu>
          <div>
            <button aria-label="검색창 열기">
              <IoSearchOutline />
            </button>
            <Link to="/bookmark">
              <IoBookmarkOutline />
            </Link>
          </div>
          <div>
            {!user && <button onClick={handleLogin}>로그인</button>}
            {user && <Profile {...user} />}
            {user && <button onClick={handleLogout}>로그아웃</button>}
          </div>
        </StSubMenu>
      </StWrapper>
    </StHeader>
  );
}

const StHeader = styled.header`
  grid-column: 1 / -1;
  grid-row: 1;
  position: fixed;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  height: ${({ theme }) => theme.headerHeight};
  background-color: #f8f9fa;
`;

const StWrapper = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.headerHeight};
`;

const StLogo = styled.div`
  h1 {
    ${blindStyle}
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
    fill: black;
  }
`;

const StSubMenu = styled.div`
  display: flex;
  gap: 1rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
