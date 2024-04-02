import styled from 'styled-components';

type ProfileProps = {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  uid: string;
};

export default function Profile({ displayName, photoURL }: ProfileProps) {
  return (
    <StWrapper>
      <img src={photoURL ?? ''} alt={displayName ?? 'avatar'} />
    </StWrapper>
  );
}

export const StWrapper = styled.div`
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 14px;
    cursor: pointer;
  }
`;
