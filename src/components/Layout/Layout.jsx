import { AppBar } from '../AppBar';
import { Box } from '../Box';

export const Layout = () => {
  return (
    <Box display="grid" gridTemplateRows="100px 1fr">
      <AppBar />
      <Box pt="100px">Content</Box>
    </Box>
  );
};
