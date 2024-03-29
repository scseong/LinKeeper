import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  return (
    <StHeader>
      <StWrapper>
        <div className="menu">
          <div className="logo">
            <Link to="/">
              <h1>Linkeeper</h1>
            </Link>
          </div>
          {/* TODO: 네비게이션 */}
        </div>
        <StSubMenu>
          <div className="icons">
            <button>검색</button>
            <button>북마크</button>
          </div>
          <div className="profile">
            <button>로그인/회원가입</button>
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

const StSubMenu = styled.div`
  display: flex;
  gap: 1rem;
`;
