import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/sharedlayout";
import Home from "./pages/home";
import Set from "./pages/set";
import Rest from "./pages/rest";
import Percentage from "./pages/percentage";
import Rm from "./pages/rm";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="set" element={<Set />} />
          <Route path="rest" element={<Rest />} />
          <Route path="percentage" element={<Percentage />} />
          <Route path="rm" element={<Rm />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
