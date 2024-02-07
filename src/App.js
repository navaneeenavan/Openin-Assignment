import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from "./Home.jsx";
import Paths from "./Paths.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/home" element={<Home />} />
          <Route path="/Auth" element={<Paths />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
