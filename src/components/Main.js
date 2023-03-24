import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SignInContainer from './signIn/SignInContainer';
import AccountCreationContainer from './createAccount/AccountCreationContainer';
import HomePage from './homePage/HomePage';

const Main = () => {
  return (
    <Routes>
      <Route exact path='/' element={< SignInContainer />}></Route>
      <Route exact path='/editBio' element={< AccountCreationContainer />}></Route>
      <Route exact path='/home' element={< HomePage />}></Route>
    </Routes>
  );
}

export default Main;