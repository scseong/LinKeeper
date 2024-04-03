import styled from 'styled-components';

export default function Footer() {
  return <StFooter>Footer</StFooter>;
}

const StFooter = styled.footer`
  grid-column: 2 / -1;
  grid-row: 3;
  width: 100%;
  height: ${({ theme }) => theme.footerHeight};
  background-color: #f8f9fa;
`;
