import styled from "styled-components";
import NavbarMenu from "../navigation/NavbarMenu";

const Terminal = ({
  children,
  filePath,
}: {
  children: React.ReactNode;
  filePath?: string;
}) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header>
          <h5>joao-cv &gt; src &gt; {filePath}</h5>
          <HeaderControlers>
            <Button />
            <Button />
            <Button />
          </HeaderControlers>
        </Header>
        <NavbarMenu />
      </HeaderWrapper>
      {children}
      <FooterWrapper>
        <a
          href="https://www.linkedin.com/in/joao-aguiam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/joao-cv
        </a>
      </FooterWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--color-bg-terminal);
  border-radius: 1.5rem;
  border: 1px solid var(--color-border-gray);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  max-height: 700px;
  position: relative;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  background: color-mix(in srgb, var(--color-bg-terminal) 90%, transparent);
  border-bottom: 1px solid
    color-mix(in srgb, var(--color-border-gray) 30%, transparent);
  border-radius: 1.5rem 1.5rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1rem 0 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Header = styled.div`
  align-items: center;
  color: var(--color-text-light-gray);
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
    background: var(--color-terminal-red);
  }

  &:nth-child(2) {
    background: var(--color-terminal-yellow);
  }

  &:nth-child(3) {
    background: var(--color-terminal-green);
  }
`;

const FooterWrapper = styled.div`
  background: var(--color-bg-terminal);
  border-radius: 0 0 1.5rem 1.5rem;
  border-top: 1px solid
    color-mix(in srgb, var(--color-border-gray) 30%, transparent);
  bottom: 0;
  margin-top: auto;
  padding: 1rem;
  position: sticky;
  text-align: center;
  width: 100%;
  z-index: 100;

  a {
    color: var(--color-text-light-gray);
    text-decoration: none;
  }
`;

export default Terminal;
