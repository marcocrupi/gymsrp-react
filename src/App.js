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
        <Route path="/gymsrp-react" element={<SharedLayout />}>
          <Route index element={<Rest />} />
          <Route path="/gymsrp-react/set" element={<Set />} />
          <Route path="/gymsrp-react/percentage" element={<Percentage />} />
          <Route path="/gymsrp-react/rm" element={<Rm />} />
          <Route path="/gymsrp-react/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
