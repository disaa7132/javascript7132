import React from 'react';
import { useUser } from './Lab1.2/UserContext';

const UserMenu = () => {
  const { info, permissions } = useUser();

  return (
    <div style={{ marginTop: '10px', borderTop: '1px dashed gray' }}>
      <h4>User Menu</h4>
      <p>Contact: {info.email}</p>
      <ul>
        <li>Can Edit: {permissions.canEdit ? 'Yes' : 'No'}</li>
        <li>Can Delete: {permissions.canDelete ? 'Yes' : 'No'}</li>
        <li>Can View: {permissions.canView ? 'Yes' : 'No'}</li>
      </ul>
    </div>
  );
};

export default UserMenu;