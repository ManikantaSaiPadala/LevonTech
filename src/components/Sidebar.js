import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import '../styles/Sidebar.css';

const Sidebar = () => (
    <aside className="sidebar">
        <VStack spacing={4} align="stretch">
            <Box>Dashboard</Box>
            <Box>NTF Marketplace</Box>
            <Box>Tables</Box>
            <Box>Kanban</Box>
            <Box>Profile</Box>
            <Box>Sign In</Box>
        </VStack>
    </aside>
);

export default Sidebar;
