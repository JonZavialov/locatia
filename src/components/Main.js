import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AccountCreationContainer from './createAccount/AccountCreationContainer';
import HomePage from './homePage/HomePage';
import ProfilePageContainer from './profilePage/ProfilePageContainer';
import NotFound from './notFound/NotFound';
import LandingPage from './landingPage/LandingPage';
import LoginContainer from './login/LoginContainer';
import MessagesContainer from './messages/MessagesContainer';
import IndBlog from './blog/blogPage/IndBlog'
import BlogCardsDisplay from './blog/card/BlogCardsDisplay';
import Schedule from './schedule/Schedule';
import FaqContainer from './faq/FaqContainer';
import LegalPage from './legalPage/LegalPage';
import ContactUs from './contactUs/ContactUs';
import EditProfile from './editProfile/EditProfile';

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
      <Route path="/terms" element={< LegalPage fileName="termsofservice.txt" />} />
      <Route path="/2257" element={< LegalPage fileName="2257.txt" />} />
      <Route path="/dmca" element={< LegalPage fileName="dmca.txt" />} />
      <Route path="/ccpa" element={< LegalPage fileName="ccpa.txt" />} />
      <Route path="/buyerseller" element={< LegalPage fileName="buyerseller.txt" />} />
      <Route path="/faq" element={< FaqContainer />} />
      <Route path="/contact" element={< ContactUs />} />
      <Route path='blogs' element={<BlogCardsDisplay />} />
      <Route path='blogs/:category' element={<BlogCardsDisplay />} />
      <Route path='blogs/:category/:id' element={<IndBlog />} />
      {/* path should include uuid to fetch user data */}
      <Route path='editProfile' element={<EditProfile />} />
      <Route path="*" element={< NotFound />} />
    </Routes>
  );
}

export default Main;