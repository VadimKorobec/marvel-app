import { Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";

import MainPage from "../../pages/MainPage";
import ComicsPage from "../../pages/ComicsPage";
import NotFound from "../../pages/NotFound";
import SingleComicPage from "../../pages/SingleComicPage";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/comics" element={<ComicsPage />} />
          <Route path="/comics/:comicId" element={<SingleComicPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
