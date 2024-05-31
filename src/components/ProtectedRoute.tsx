import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store';

interface ProtectedRouteProps {
  component: React.ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
  const users = useSelector((state: RootState) => state.user.users);
  const user = users.length > 0 ? users[0] : null; // Assuming the first user is the logged-in user

  return user ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
