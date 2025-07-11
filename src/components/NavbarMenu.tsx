import styled from "styled-components";

const NavbarMenu = () => {
  return (
    <Tabs>
      <Tab>
        <a href="/">Home</a>
      </Tab>
      <Tab>
        <a href="/about">About</a>
      </Tab>
      <Tab>
        <a href="/contact">Contact</a>
      </Tab>
    </Tabs>
  );
};

const Tabs = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const Tab = styled.li`
  background: #303030;
`;

export default NavbarMenu;
