import styled from 'styled-components';

interface IPageBodyProp {
  children: React.ReactNode;
}

export default function PageBody({ children }: IPageBodyProp) {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  flex-grow: 1;

  width: 100%;
  min-height: 500px;
  padding: 30px;

  background-color: var(--color-light-alt);
  border-radius: var(--border-radius-large);
`;
