import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import Error from './pages/Error.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Profile from './pages/Profile.jsx';

// subjects

import Minesweeper from './pages/Minesweeper.jsx';

import Solitaire from './pages/Solitaire.jsx';

import References from './pages/References.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },

      {
        path: '/Contact',
        element: <Contact />,
      },
      
      {
        path: '/Resume',
        element: <Resume />,
      },

      {
        path: '/Minesweeper',
        element: <Minesweeper />,
      },

      {
        path: '/Solitaire',
        element: <Solitaire />,
      },

      {
        path: '/login',
        element: <Login />
      },

      {
        path: '/signup',
        element: <Signup />
      },

      {
        path: '/Profile',
        element: <Profile />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
