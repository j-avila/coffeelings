import React from 'react';

const AuthWrapper = ({
  children,
  fallback,
}: React.PropsWithChildren<{ fallback: JSX.Element }>): JSX.Element => {
  const data = true;
  if (!children) {
    throw new Error('AuthWrapper requires a child component');
  }
  if (status === 'loading') {
    return <i className="fa-solid fa-compact-disc" />;
  } else if (data) {
    return <>{children}</>;
  }

  return fallback;
};

export default AuthWrapper;
