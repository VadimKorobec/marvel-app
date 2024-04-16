import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const NotFound = lazy(() => import("../../pages/NotFound"));
const MainPage = lazy(() => import("../../pages/MainPage"));
const ComicsPage = lazy(() => import("../../pages/ComicsPage"));
const SingleComicLayout = lazy(() => import("../../pages/SingleComicPage"));
const SingleCharacterLayout = lazy(() =>
  import("../../pages/SingleCharacterPage")
);
const SinglePage = lazy(() => import("../../pages/SinglePage"));

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/comics" element={<ComicsPage />} />
            <Route
              exact
              path="/comics/:id"
              element={
                <SinglePage Component={SingleComicLayout} dataType="comic" />
              }
            />
            <Route
              exact
              path="/characters/:id"
              element={
                <SinglePage
                  Component={SingleCharacterLayout}
                  dataType="character"
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
