import { AppContext } from '@/context/appContext';
import React, { useContext } from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';

type ProtectedRouteProps = {
  component: React.FC;
};

export default function ProtectedRoute({
  component: Component,
}: ProtectedRouteProps) {
  const { state } = useContext(AppContext);
  const isAuthenticated = state?.user?.token;
  const location = useLocation();

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
