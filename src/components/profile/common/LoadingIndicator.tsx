import styled, { keyframes } from 'styled-components';

export default function LoadingIndicator() {
  return (
    <StWrapper>
      <StLoading />
    </StWrapper>
  );
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
}
`;

const StWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StLoading = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 40px;
  height: 40px;
  animation: ${spin} 2s linear infinite;
`;
