import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Category } from 'src/typings/db';

export default function Sidebar() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function getCategory() {
      const result = await axios.get('/category.json');
      setCategories(result.data.category);
    }

    getCategory();
  }, []);

  if (!categories) return null;

  return (
    <StSidebar>
      <nav>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <StMajorNavLink to={`/topics/${category.slug}`}>
                <p>{category.name}</p>
              </StMajorNavLink>
              {category.children.length > 0 && (
                <ul>
                  {category.children.map((child) => (
                    <li key={child.id}>
                      <StSubNavLink
                        to={`topics/${category.slug}/${encodeURIComponent(
                          child.slug
                        )}`}
                      >
                        {child.name}
                      </StSubNavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <StMajorNavLink to="/topics/settings">
              <p>설정</p>
            </StMajorNavLink>
          </li>
        </ul>
      </nav>
    </StSidebar>
  );
}

const StSidebar = styled.aside`
  margin-top: ${({ theme }) => theme.headerHeight};
  padding: 1rem;
  grid-column: 1;
  grid-row: 2 / -1;
  position: fixed;
  width: ${({ theme }) => theme.sidebarWidth};
  height: calc(100vh - ${({ theme }) => theme.headerHeight});
  color: ${({ theme }) => theme.navTextColor};
`;

const StMajorNavLink = styled(NavLink)`
  margin-bottom: 3px;
  padding: 10px 12px 10px 20px;
  display: block;
  width: 100%;
  border-radius: 100px;
  font-weight: bold;

  &.active {
    background-color: ${({ theme }) => theme.navBgActiveColor};
    color: ${({ theme }) => theme.navTextActiveColor};

    &:hover {
      background-color: ${({ theme }) => theme.navBgActiveHoverColor};
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.navBgHoverColor};
  }
`;

const StSubNavLink = styled(NavLink)`
  padding: 6px 12px 6px 48px;
  width: 100%;
  display: block;
  font-weight: 600;
  transition: all 100ms ease;

  &.active {
    color: ${({ theme }) => theme.navTextActiveColor};
  }

  &:hover {
    padding-left: 51px;
    color: black;
  }
`;
