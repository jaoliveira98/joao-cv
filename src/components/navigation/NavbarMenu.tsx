import styled from "styled-components";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "homepage.html",
    link: "/",
    label: "Navigate to homepage",
  },
  {
    name: "styles.css",
    link: "/styles.css",
    label: "Navigate to styles",
  },
];

const NavbarMenu = () => {
  return (
    <Tabs>
      {menuItems.map((menuItem, index) => (
        <Tab key={index}>
          <StyledNavLink to={menuItem.link} aria-label={menuItem.label} end>
            {menuItem.name}
          </StyledNavLink>
        </Tab>
      ))}
    </Tabs>
  );
};

const Tabs = styled.ul`
  align-items: center;
  display: flex;
  padding: 0;
`;

const Tab = styled.li`
  all: unset;
  border-radius: 0.1rem;
  border: 1px solid
    color-mix(in srgb, var(--color-border-gray) 30%, transparent);
  transition: background 0.1s ease-in-out;

  &:has(.active) {
    background: var(--color-border-gray);
    color: var(--color-white);
  }

  &:hover {
    background: var(--color-border-gray);
    color: var(--color-white);
    cursor: pointer;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: var(--color-text-light-gray);
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
  padding: 0.5rem;

  &.active {
    color: var(--color-active-nav);
  }
`;

export default NavbarMenu;
