import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import './UserDetails.css';

const UserDetails: React.FC = () => {
  const users = useSelector((state: RootState) => state.user.users);

  return (
    <div className="userdetails-container">
      <h2>User Details</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>ID:</strong> {user.id} <br />
            <strong>Name:</strong> {user.name} <br />
            <strong>Address:</strong> {user.address} <br />
            <strong>Email:</strong> {user.email} <br />
            <strong>Phone:</strong> {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;
