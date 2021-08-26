import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

const PrivateRoute = ({ children, path }) => {
  let token = null;
  return token ? (
    <Route exact path={path}>
      {children}
    </Route>
  ) : null;
};

const PublicRoute = ({ children, path }) => {
  return (
    <Route exact path={path}>
      {children}
    </Route>
  );
};

export const Navigator = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/login">
          <Login />
        </PublicRoute>
        <PublicRoute path="/signup">
          <Signup />
        </PublicRoute>
      </Switch>
    </Router>
  );
};
