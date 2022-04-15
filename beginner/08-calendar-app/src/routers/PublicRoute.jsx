import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

export const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {

  return (
    // Each component get some properties that are passed by inference
    <Route { ...rest } component={ (props) => (
      ( isAuthenticated )
        ? ( <Redirect to="/"/> )
        : ( <Component { ...props } /> )
      )}
    />
  )
};

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
