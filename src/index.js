import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss'
import { UserProvider, useUpdateUser, useUser } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider value={JSON.parse(localStorage.getItem("user"))}>

    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserProvider>
);
