import React from 'react';
import { useColorMode, Button } from '@chakra-ui/react';
import '../styles/Header.css';

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    
    return (
        <header className="header">
            <div className="logo">HORIZON FREE</div>
            <nav>
                <ul>
                    <li>Dashboard</li>
                    <li>NTF Marketplace</li>
                    <li>Tables</li>
                    <li>Kanban</li>
                    <li>Profile</li>
                    <li>Sign In</li>
                </ul>
            </nav>
            <div className="profile">
                <span>🔔</span>
                <span>👤</span>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
                </Button>
            </div>
        </header>
    );
}

export default Header;

