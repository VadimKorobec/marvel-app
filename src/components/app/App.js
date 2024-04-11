import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";

import AppHeader from "../appHeader/AppHeader";

import MainPage from "../../pages/MainPage";
import ComicsPage from "../../pages/ComicsPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <AppHeader />
        <main>
          <Switch>
            <Route exact path="/comics">
              <ComicsPage />
            </Route>
            <Route exact path="/">
              <MainPage />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
