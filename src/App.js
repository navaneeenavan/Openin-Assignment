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
            {/* Use <Navigate to="/home" /> or <Navigate to="/Auth" /> to navigate */}
            {/* <Route path="/" element={<Navigate to="/home" />} /> */}
            <Route path="/" element={<Paths/>} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      );
    }
    


export default App;
