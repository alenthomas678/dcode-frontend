import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Task1 from "./components/task1";
import Task2 from "./components/task2";
import Task3 from "./components/task3";
import Task4 from "./components/task4";
import Task5 from "./components/task5";
import Task6 from "./components/task6";
import Task7 from "./components/task7";
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
      <Route path="/task5">
        {authCtx.isLoggedIn && <Task5 />}
        {!authCtx.isLoggedIn && <Redirect to="/auth" />}
      </Route>
      <Route path="/task6">
        {authCtx.isLoggedIn && <Task6 />}
        {!authCtx.isLoggedIn && <Redirect to="/auth" />}
      </Route>
      <Route path="/task7">
        {authCtx.isLoggedIn && <Task7 />}
        {!authCtx.isLoggedIn && <Redirect to="/auth" />}
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default App;
