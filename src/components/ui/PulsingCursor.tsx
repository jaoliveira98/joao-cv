import styled from "styled-components";

const PulsingCursor = () => {
  return <Cursor />;
};

const Cursor = styled.div`
  width: 1px;
  height: 1.2em;
  background: var(--color-text-light);
  animation: pulse 0.6s infinite;

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    30% {
      opacity: 0;
    }
  }
`;

export default PulsingCursor;
