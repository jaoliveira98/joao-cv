import styled from "styled-components";
import TerminalHeader from "./TerminalHeader";
import TerminalFooter from "./TerminalFooter";

const Terminal = ({
  children,
  theme = "dark",
  showHeader = false,
  showFooter = false,
  filePath,
}: {
  children: React.ReactNode;
  theme?: "light" | "dark";
  showHeader?: boolean;
  showFooter?: boolean;
  filePath?: string;
}) => {
  return (
    <Wrapper theme={theme}>
      {showHeader && <TerminalHeader filePath={filePath} />}
      {children}
      {showFooter && <TerminalFooter />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${({ theme }) =>
    theme === "light" ? "var(--color-white)" : "var(--color-bg-dark)"};
  border-radius: 1.5rem;
  border: 1px solid var(--color-border-gray);
  color: ${({ theme }) => theme === "dark" && "var(--color-white)"};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  max-height: 700px;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export default Terminal;
