import styled from "styled-components";
import NavbarMenu from "./NavbarMenu";

const Terminal = ({
  children,
  filePath,
}: {
  children: React.ReactNode;
  filePath?: string;
}) => {
  return (
    <Wrapper>
      <Header>
        <h5>./dev/joao-cv{filePath}</h5>
        <HeaderControlers>
          <Button />
          <Button />
          <Button />
        </HeaderControlers>
      </Header>
      <NavbarMenu />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #303030;
  border-radius: 1.5rem;
  border: 1px solid #6a6a6a;
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
`;

const Header = styled.div`
  align-items: center;
  color: rgb(200, 200, 200);
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const HeaderControlers = styled.div`
  align-items: center;
  display: flex;
  gap: 0.7rem;
`;

const Button = styled.button`
  align-items: center;
  all: unset;
  border-radius: 100%;
  display: flex;
  height: 0.9rem;
  justify-content: center;
  width: 0.9rem;

  &:nth-child(1) {
    background: #ff6057;
  }

  &:nth-child(2) {
    background: #ffbd2e;
  }

  &:nth-child(3) {
    background: #27c93f;
  }
`;

const Tabs = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const Tab = styled.div`
  background: #303030;
`;

export default Terminal;
