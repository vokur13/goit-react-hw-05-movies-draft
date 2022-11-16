import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { NavLink, Outlet } from 'react-router-dom';
import { Box } from 'components/Box';

const navItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' },
];

const NavItem = styled(NavLink)`
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.text};
  text-decoration: none;

  &.active {
    color: ${p => p.theme.colors.primary};
  }
`;

export const MovieDetails = () => {
  const { movieId } = useParams();
  return (
    <Box>
      <div>Now showing movie with id - {movieId}</div>;
      <Box as="ul" display="flex">
        {navItems.map(item => (
          <NavItem to={item.href}>{item.text}</NavItem>
        ))}
      </Box>
    </Box>
  );
};
