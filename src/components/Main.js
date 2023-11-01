import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AccountCreationContainer from './createAccount/AccountCreationContainer';
import HomePage from './homePage/HomePage';
import ProfilePageContainer from './profilePage/ProfilePageContainer';
import NotFound from './homePage/NotFound';
import LandingPage from './landingPage/LandingPage';
import LoginContainer from './login/LoginContainer';
import MessagesContainer from './messages/MessagesContainer';
import Schedule from './schedule/Schedule';
import FaqContainer from './faq/FaqContainer';
import LegalPage from './legalPage/LegalPage';

const Main = () => {
  if (window.innerWidth < 1000 && window.location.pathname !== "/") window.location.replace('/')
  
  return (
    <Routes>
      <Route exact path='/' element={< LandingPage />}></Route>
      <Route exact path='/login' element={< LoginContainer />}></Route>
      <Route exact path='/create-account' element={< AccountCreationContainer />}></Route>
      <Route exact path='/home' element={< HomePage />}></Route>
      <Route path="/search" element={< HomePage search={true} />} />
      <Route path="/profile/:username" element={< ProfilePageContainer />} />
      <Route path="/messages" element={< MessagesContainer />} />
      <Route path="/calendar" element={< Schedule />} />
      <Route path="/privacy" element={< LegalPage fileName="privacypolicy.txt" />} />
      <Route path="/faq" element={< FaqContainer />} />
      <Route path="/404" element={< NotFound />} />
      <Route path="*" element={< NotFound />} />
    </Routes>
  );
}

export default Main;