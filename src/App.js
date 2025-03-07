import { BrowserRouter, Route, Routes } from "react-router";
import Initial from "./pages/initial";
import AboutMe from "./pages/aboutMe";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial/>} />
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="*" element={<div>Page not found</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
