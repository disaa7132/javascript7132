import React from 'react';
import { useUser } from './UserContext';
import Header from './Header.jsx';

const Dashboard = () => {
  const { info } = useUser();
  
  return (
    <div style={{ padding: '20px', border: '1px solid black' }}>
        <h2>Dashboard</h2>
        <p>Welcome back, {info.name}!</p>
        <Header />
  
    </div>
  );
};
export default Dashboard;