import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Calendar from './pages/Calendar';

const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/calendar', element: <Calendar /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
