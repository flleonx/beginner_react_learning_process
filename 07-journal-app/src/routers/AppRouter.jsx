import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { auth } from "../firebase/firebaseConfig";
import { login } from "../actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { startLoadingNotes } from "../actions/notes";

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setLoggedIn( true );
        dispatch( startLoadingNotes( user.uid ) );
      } else {
        setLoggedIn( false );
      }

      setChecking(false);
    });
  }, [ dispatch ]);

  if ( checking ) {
    return (
      <h1>Wait...</h1>
    )
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={ AuthRouter  }
            isAuthenticated={ isLoggedIn }
          />
          <PrivateRoute
            exact
            path="/"
            component={ JournalScreen  }
            isAuthenticated={ isLoggedIn }
          />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
