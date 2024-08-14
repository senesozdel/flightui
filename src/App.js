import './App.css';
import Home from './pages/Home';
import MyFlights from './pages/MyFlights';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './pages/NoPage';
function App() {
  return (
    < >
        <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/myFlights" element={<MyFlights />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
