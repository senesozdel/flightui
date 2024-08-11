import './App.css';
import Home from './pages/Home';
import MyFlights from './pages/MyFlights';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
function App() {
  return (
    < >
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/myFlights" element={<MyFlights />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
