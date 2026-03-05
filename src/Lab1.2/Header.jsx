import React from 'react';
import { useUser } from './UserContext';
import UserMenu from '../UserMenu.jsx';

const Header = () => {
  const { info, theme, toggleTheme } = useUser();

  
  const headerStyle = {
    background: theme.darkMode ? '#333' : '#eee',
    color: theme.darkMode ? '#fff' : '#000',
    padding: '10px'
  };

  return (
    <div style={headerStyle}>
      <h3>Header Section</h3>
      <p>Current Role: {info.role}</p>
      <button onClick={toggleTheme}>
        Toggle {theme.darkMode ? 'Light' : 'Dark'} Mode
      </button>
      
      <UserMenu />
    </div>
  );
};

export default Header;