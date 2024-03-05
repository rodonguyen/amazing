import Home from "./Home.js";
import NavBar from "../components/NavBar.js";
import TimeIHaveLeft from "./TimeIHaveLeft.tsx";
import HappyBirthdayHomie from "./HappyBirthdayHomie.tsx";
import NotFound from "./NotFound.js";
import "../stylesheets/App.css";

import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const AppConstantElements = (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={AppConstantElements}>
            <Route path="time-i-have-left" element={<TimeIHaveLeft />} />
            <Route
              path="happy-birthday-homie"
              element={<HappyBirthdayHomie />}
            />
            <Route path="/" exact element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
