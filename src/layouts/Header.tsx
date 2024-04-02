import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoSearchOutline, IoBookmarkOutline } from 'react-icons/io5';
import { blindStyle } from '@styles/GlobalStyle';
import LogoIcon from '@assets/logo.svg';
import { login, logout, onUserStateChange } from '@apis/firebase';
import { User } from 'firebase/auth';

export default function Header() {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = async () => {
    const user = await login();
    if (user) {
      setUser(user);
    }
  };

  const handleLogout = async () => {
    const user = await logout();
    if (user === null) {
      setUser(null);
    }
  };

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

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
          <div className="icons">
            <button aria-label="검색창 열기">
              <IoSearchOutline />
            </button>
            <Link to="/bookmark">
              <IoBookmarkOutline />
            </Link>
          </div>
          <div className="profile">
            {!user && <button onClick={handleLogin}>로그인</button>}
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
  max-width: var(--max-width);
  height: var(--header-height);
  background-color: #f8f9fa;
`;

const StWrapper = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
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