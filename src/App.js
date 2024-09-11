import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import Home from "./Components/Common/Home";
import { Routes, Route } from "react-router-dom";
import Userlisting from "./Components/Common/Userlisting";

function App() {
  return (
    <div className="App">
      <div className="leftside">
        <Header />
      </div>

      <div className="rightside">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/userlisting" element={<Userlisting/>}></Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
