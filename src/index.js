import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from './App';
import { Login } from './components/Login'
import { UserContextProvider } from './context/UserContext'

ReactDOM.render(

  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<UserContextProvider>
        <App />
      </UserContextProvider>} />
      <Route exact path='/login' element={<UserContextProvider>
        <Login />
      </UserContextProvider>} />


    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
