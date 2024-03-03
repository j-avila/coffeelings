import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from '@pages/Home';
import Calendar from '@pages/Calendar';
import Settings from '@pages/Settings';
import SignUp from '@pages/SignUp';
import ErrorPage from '@pages/ErrorPage';
import LogIn from '@pages/Login';
import ProtectedRoute from '@components/Auth';

import { AppProvider } from '@context/appContext';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute component={Home} />,
      errorElement: <ErrorPage />,
    },
    { path: '/journal', element: <ProtectedRoute component={Calendar} /> },
    { path: '/settings', element: <ProtectedRoute component={Settings} /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/login', element: <LogIn /> },
  ]);

  return (
    <div className="container pb-10">
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </div>
  );
};

export default App;
