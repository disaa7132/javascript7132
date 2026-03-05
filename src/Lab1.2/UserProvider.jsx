import React, { useState } from 'react';
import UserContext from './UserContext';

export const UserProvider = ({ children }) => {
 
  const [userData, setUserData] = useState({
    info: { name: 'Danial', email: 'danial@example.com', role: 'Admin' },
    permissions: { canEdit: true, canDelete: false, canView: true },
    theme: { darkMode: false, fontSize: '16px' }
  });

  
  const toggleTheme = () => {
    setUserData(prev => ({
      ...prev,
      theme: { ...prev.theme, darkMode: !prev.theme.darkMode }
    }));
  };

  
  return (
    <UserContext.Provider value={{ ...userData, toggleTheme }}>
      {children}
    </UserContext.Provider>
  );
};