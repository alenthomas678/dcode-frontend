import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Task1 from "./components/task1";
import Task2 from "./components/task2";
import Task3 from "./components/task3";
import Task4 from "./components/task4";
import AuthPage from "./components/AuthPage";
import AuthContext from "./store/auth-context";

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Switch>
      <Route path="/" exact>
        {authCtx.isLoggedIn && <Redirect to="/task1" />}
        {!authCtx.isLoggedIn && <Redirect to="/auth" />}
      </Route>
      {!authCtx.isLoggedIn && (
        <Route path="/auth">
          <AuthPage />
        </Route>
      )}
      <Route path="/task1">
        {authCtx.isLoggedIn && <Task1 />}
        {!authCtx.isLoggedIn && <Redirect to="/auth" />}
      </Route>
      <Route path="/task2">
        {authCtx.isLoggedIn && <Task2 />}
        {!authCtx.isLoggedIn && <Redirect to="/auth" />}
      </Route>
      <Route path="/task3">
        {authCtx.isLoggedIn && <Task3 />}
        {!authCtx.isLoggedIn && <Redirect to="/auth" />}
      </Route>
      <Route path="/task4">
        {authCtx.isLoggedIn && <Task4 />}
        {!authCtx.isLoggedIn && <Redirect to="/auth" />}
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default App;
