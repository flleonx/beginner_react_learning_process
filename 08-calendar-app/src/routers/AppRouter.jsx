import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { LoginScreen } from '../components/auth/LoginScreen';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

import { startChecking } from "../actions/auth";

export const AppRouter = () => {

  const dispatch = useDispatch();
  const { checking, uid } = useSelector(state => state.auth);

  useEffect(() => {
    setTimeout(() => {
      dispatch(startChecking());
    }, 1000);
  }, [dispatch]);

  if (checking) {
    return (
      <Container style={{alignItems: "center", justifyContent: "center"}}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <CircularProgress size={300}/>
        </Grid>
      </Grid>
      </Container>
    )
  };

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={ LoginScreen }
            isAuthenticated={!!uid}
          />
          <PrivateRoute
            exact
            path="/"
            component={ CalendarScreen }
            isAuthenticated={!!uid}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
};
