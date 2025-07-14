import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper
      href="https://www.linkedin.com/in/joao-aguiam"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get in touch with me on LinkedIn"
    >
      <MovingPointer>👉</MovingPointer> Get in touch with me on
      <span>LinkedIn</span>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  align-items: center;
  background-color: var(--color-bg-dark);
  border-radius: 1rem;
  border: 1px solid var(--color-border-gray);
  bottom: 2rem;
  color: var(--color-text-light);
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  gap: 0.5rem;
  padding: 1rem;
  position: absolute;
  right: 2rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-border-gray);
    color: var(--color-bg-dark);
  }

  /* TODO: Move span out of styled-component and make it a component */
  span {
    color: var(--color-active-nav);
  }
`;

const MovingPointer = styled.span`
  animation-name: left-to-right;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;

  @keyframes left-to-right {
    0% {
      transform: translateX(0);
    }
    10% {
      transform: translateX(-10px);
    }
    20% {
      transform: translateX(0px);
    }
    30% {
      transform: translateX(-10px);
    }
    40% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(-10px);
    }
    60% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export default Contact;
