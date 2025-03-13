import { BrowserRouter, Route, Routes } from "react-router";
import Initial from "./pages/Initial";
import AboutMe from "./pages/AboutMe";
import Menu from "./components/Menu";
import Footer from "components/Footer";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Initial/>} />
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="*" element={<div>Page not found</div>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
