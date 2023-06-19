import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Shelter from "./pages/Shelter/Shelter";
import Record from "./pages/Record/Record";
import Home from "./pages/Home/Home";
import Rule from "./pages/Rule/Rule";
import SubPage1 from "./pages/Rule/SubPage1";
import SubPage2 from "./pages/Rule/SubPage2";
import About from "./pages/About";

const App = () => {
  const [map, setMap] = useState(null);

  return (
    <div className="root">
      <Routes>
        <Route path="/" element={<About map={map} setMap={setMap} />} />
        <Route
          path="/about"
          element={<About map={map} setMap={setMap} />}
        ></Route>
        <Route path="/home" element={<Home map={map} setMap={setMap} />} />
        <Route path="/shelter" element={<Shelter />} />
        <Route path="/record" element={<Record />} />
        <Route path="/rule" element={<Rule />}>
          <Route path="subpage1" element={<SubPage1 />} />
          <Route path="subpage2" element={<SubPage2 />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
