import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SignInContainer from './signIn/SignInContainer';
import AccountCreationContainer from './createAccount/AccountCreationContainer';
import HomePage from './homePage/HomePage';
import ProfilePage from './profilePage/ProfilePage';
import NotFound from './homePage/NotFound';

const Main = () => {
  return (
    <Routes>
      <Route exact path='/' element={< SignInContainer />}></Route>
      <Route exact path='/editBio' element={< AccountCreationContainer />}></Route>
      <Route exact path='/home' element={< HomePage />}></Route>
      <Route path="/profile/:username" element={< ProfilePage />} />
      <Route path="/404" element={< NotFound />} />
      <Route path="*" element={< NotFound />} />
    </Routes>
  );
}

export default Main;