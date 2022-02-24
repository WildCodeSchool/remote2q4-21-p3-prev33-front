// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import NavBar from './components/navbar/NavBar';
// import Formation from './pages/formation/Formation';
// import Audits from './pages/audits/Audits';
// import Tests from './pages/tests/Tests';
// import Laws from './pages/laws/Laws';
// import Company from './pages/company/Company';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       {/* Welcome Prev33! */}
//       <NavBar />
//       <Routes>
//         <Route path="/formation" element={< Formation />} />
//         <Route path="/AuditsAndAdvices" element={< Audits />} />
//         <Route path="/tests" element={< Tests />} />
//         <Route path="/TextOfLawsAndApprovals" element={< Laws />} />
//         <Route path="/AboutUs" element={< Company />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import Formation from './pages/formation/Formation';
import Audits from './pages/audits/Audits';
import Tests from './pages/tests/Tests';
import Laws from './pages/laws/Laws';
import Company from './pages/company/Company';

function App() {
  return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/audits" element={<Audits />}></Route>
          <Route path="/tests" element={<Tests />}></Route>
          <Route path="/laws" element={<Laws />}></Route>
          <Route path="/company" element={<Company />}></Route>
        </Routes>
      </div>
  );
}

export default App;