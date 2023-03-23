import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SignInContainer from './signInComps/SignInContainer';

const Main = () => {
  return (
    <Routes>
      <Route exact path='/' element={< SignInContainer />}></Route>
    </Routes>
  );
}

export default Main;