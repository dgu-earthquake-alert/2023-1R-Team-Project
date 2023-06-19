import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Shelter from "./pages/Shelter/Shelter";
import Record from "./pages/Record/Record";
import Home from "./pages/Home/Home";
import Rule from "./pages/Rule/Rule";
import SubPage1 from "./pages/Rule/SubPage1";
import SubPage2 from "./pages/Rule/SubPage2";
import Link from "./pages/About/Link/Link";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Team from "./pages/About/Team";

const App = () => {
  const [map, setMap] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<About map={map} setMap={setMap} />} />
      <Route path="/about" element={<About map={map} setMap={setMap} />} />
      <Route path="/team" element={<Team />} />
      <Route path="/proposal" element={<Team />} />
      <Route path="/link" element={<Link />} />
      <Route path="/home" element={<Home map={map} setMap={setMap} />} />
      <Route path="/shelter" element={<Shelter />} />
      <Route path="/record" element={<Record />} />
      <Route path="/rule" element={<Rule />}>
        <Route path="subpage1" element={<SubPage1 />} />
        <Route path="subpage2" element={<SubPage2 />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
