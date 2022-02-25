import "./App.css";
import Home from "./pages/Home/Home";
import Training from "./pages/Training/Training";
import Home from "./pages/audits/Audits";
import PageTest from "./pages/tests/PageTest";
import About from "./pages/company/About";
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formation" element={<Training />} />
        <Route path="/audits" element={<Audits />}></Route>
        <Route path="/tests" element={<PageTest />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
