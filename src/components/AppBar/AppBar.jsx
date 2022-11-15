import styled from 'styled-components';
import { Box } from '../Box';
import { NavLink } from 'react-router-dom';

const navItems = [
  { href: 'home', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};

  &.active {
    // background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;

export const AppBar = () => {
  return (
    <Box
      as="header"
      position="fixed"
      zIndex="99"
      width={1}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bg="#3caea3"
      px={4}
      py={2}
      boxShadow="0px 4px 8px 0px rgba(34, 60, 80, 0.42)"
    >
      <Box as="nav" display="flex" flex={1}>
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};
