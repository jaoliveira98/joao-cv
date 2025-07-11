import styled from "styled-components";

const Terminal = ({
  children,
  light,
}: {
  children: React.ReactNode;
  light?: boolean;
}) => {
  return <Wrapper light={light}>{children}</Wrapper>;
};

const Wrapper = styled.div<{ light?: boolean }>`
  background: ${({ light }) =>
    light ? "var(--color-white)" : "var(--color-bg-light)"};
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

export default Terminal;
