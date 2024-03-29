import styled from 'styled-components';

export default function Sidebar() {
  return <StSidebar>Sidebar</StSidebar>;
}

const StSidebar = styled.aside`
  margin-top: var(--header-height);
  grid-column: 1;
  grid-row: 2 / -1;
  position: fixed;
  width: var(--sidebar-width);
  height: calc(100vh - var(--header-height));
  background-color: #e9ecef;
`;
