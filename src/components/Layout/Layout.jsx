import { Box } from '../Box'

export const Layout = () => {
    return <Box display='grid' gridTemplateRows='125px 1fr'>
        <div>Appbar</div>
        <div>Content</div>
    </Box>;
}