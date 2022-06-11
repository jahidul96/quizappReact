import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AuthScreen from "./pages/AuthScreen";
import Bangladesh from "./pages/Bangladesh";
import History from "./pages/History";
import HomeScreen from "./pages/HomeScreen";
import Javascript from "./pages/Javascript";
import JsReact from "./pages/JsReact";
import Pograming from "./pages/Pograming";
import World from "./pages/World";

const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : false


function AllRoute() {
  if (user) {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/quiz/bangladesh" element={<Bangladesh />} />
          <Route path="/quiz/history" element={<History />} />
          <Route path="/quiz/pograming" element={<Pograming />} />
          <Route path="/quiz/javascript" element={<Javascript />} />
          <Route path="/quiz/react" element={<JsReact />} />
          <Route path="/quiz/world" element={<World />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    )



  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthScreen />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

function App() {
  return (
    <AllRoute />

  );
}


export default App;
