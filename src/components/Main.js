import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SignInContainer from './signIn/SignInContainer';
import AccountCreationContainer from './createAccount/AccountCreationContainer';

const Main = () => {
  return (
    <Routes>
      <Route exact path='/' element={< SignInContainer />}></Route>
      <Route exact path='/editBio' element={< AccountCreationContainer />}></Route>
    </Routes>
  );
}

export default Main;