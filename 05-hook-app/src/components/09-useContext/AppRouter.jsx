import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div>

        <NavBar />

        <div className="container">
          <Routes>
            <Route path="/" element={ <HomeScreen /> }/>
            <Route path="/about" element={ <AboutScreen /> }/>
            <Route path="/login" element={ <LoginScreen /> }/>
            {/* It have the weakest precedence */}
            {/* <Route path="*" element={ <HomeScreen /> }/> */}

            {/* Does not exist Redirect in react-router@6 */}
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
};
