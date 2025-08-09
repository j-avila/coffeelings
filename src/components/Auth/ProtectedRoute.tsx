import React, { useEffect } from 'react';
import { useAppContext } from '@/context/AppContext';
import { Navigate, useLocation } from 'react-router-dom';

type ProtectedRouteProps = {
  component: React.FC;
};

export default function ProtectedRoute({
  component: Component,
}: ProtectedRouteProps) {
  const { state } = useAppContext();
  const isAuthenticated = state?.user?.token;
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      console.log('User is not authenticated, redirecting to login');
    }
  }, [isAuthenticated]);

  return (
    <>
      {isAuthenticated ? (
        <Component />
      ) : (
        <Navigate to="/login" state={{ from: location }} />
      )}
    </>
  );
}
