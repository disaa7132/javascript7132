import React from 'react';
import { UserProvider } from './Lab1.2/UserProvider.js';
import Dashboard from './Lab1.2/Dashboard.jsx';

function App() {
  return (
    <UserProvider>
      <Dashboard />
    </UserProvider>
  );
}

export default App;