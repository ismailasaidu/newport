import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import About from "./pages/about/About";
import Archieves from "./pages/archieves/Archieves";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/archieves" element={<Archieves/>}/>
      </Routes>
    </div>
  );
}

export default App;
