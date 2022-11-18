import { Box } from 'components/Box';
import { TrendListItem, NavItem } from './TrendList.styled';

export const TrendList = ({ data }) => {
  return (
    <Box m={2}>
      <ul>
        {data.map(({ id, title }) => (
          <TrendListItem key={id}>
            <NavItem to={`movies/${id}`}>{title}</NavItem>
          </TrendListItem>
        ))}
      </ul>
    </Box>
  );
};
