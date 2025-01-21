import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Home from '@pages/Home';
import Calendar from '@pages/Calendar';
import Settings from '@pages/Settings';
import SignUp from '@pages/SignUp';
import ErrorPage from '@pages/ErrorPage';
import LogIn from '@pages/Login';
import ProtectedRoute from '@components/Auth';
// context
import { AppProvider } from '@context/appContext';

// css
import 'react-toastify/dist/ReactToastify.css';

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
    <div className="pb-20">
      <AppProvider>
        <RouterProvider router={router} />
        <ToastContainer position="bottom-center" theme="dark" />
      </AppProvider>
    </div>
  );
};

export default App;
