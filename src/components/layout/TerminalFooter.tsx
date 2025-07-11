import styled from "styled-components";

const TerminalFooter = () => {
  return (
    <FooterWrapper>
      <a
        href="https://www.linkedin.com/in/joao-aguiam/"
        target="_blank"
        rel="noopener noreferrer"
      >
        linkedin.com/in/joao-cv
      </a>
    </FooterWrapper>
  );
};

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

export default TerminalFooter;
