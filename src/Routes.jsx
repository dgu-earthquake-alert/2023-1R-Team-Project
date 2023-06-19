import { Routes, Route } from "react-router-dom";
import Shelter from "./pages/Shelter/Shelter";
import Record from "./pages/Record/Record";
import Home from "./pages/Home/Home";
import Rule from "./pages/Rule/Rule";
import SubPage1 from "./pages/Rule/SubPage1";
import SubPage2 from "./pages/Rule/SubPage2";
import Link from "./pages/About/Link/Link";

const App = () => {
  return (
    <div className="root">
      <Routes>
        {/* <Route path="/" element={<About />} />
        <Route path="/about" element={<About />}>
          <Route path="team" element={<Team />} />
          <Route path="proposal" element={<Team />} />
          <Route path="link" element={<Link />} />
        </Route> */}
        <Route path="about/link" element={<Link />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shelter" element={<Shelter />} />
        <Route path="/record" element={<Record />} />
        <Route path="/rule" element={<Rule />}>
          <Route path="subpage1" element={<SubPage1 />} />
          <Route path="subpage2" element={<SubPage2 />} />
        </Route>

        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </div>
  );
};

export default App;
