import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Settings from './pages/Settings';
import { AppProvider } from './context/appContext';
import SignUp from './pages/SignUp';
import ErrorPage from './pages/ErrorPage';
import LogIn from './pages/Login';

const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Home />, errorElement: <ErrorPage /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/login', element: <LogIn /> },
    { path: '/journal', element: <Calendar /> },
    { path: '/settings', element: <Settings /> },
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
