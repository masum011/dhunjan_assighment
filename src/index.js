import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Privateroutes from './pages/privateRoute/Privateroutes';
import Login from './pages/beforeLogin/Login';
import Dashboard from './pages/afterLogin/Dashboard';

const router = createBrowserRouter([
  {
    path: "/login",
    element:(
      <Privateroutes isPrivate={false}>
          <Login/>
      </Privateroutes>
    ),
  },
  {
    path: "/",
    element:(
      <Privateroutes isPrivate={true}>
          <Dashboard/>
      </Privateroutes>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>,
);
reportWebVitals();
