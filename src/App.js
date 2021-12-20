import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Forex from './components/Forex';
import Majors from './components/Majors';
import Crypto from './components/Crypto';
import Stocks from './components/Stocks';
import EFTs from './components/EFTs';
import './App.css';

const App = () => (
  <div className="markets">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/forex" element={<Forex />} />
      <Route path="/majors" element={<Majors />} />
      <Route path="/crypto" element={<Crypto />} />
      <Route path="/stocks" element={<Stocks />} />
      <Route path="/efts" element={<EFTs />} />
    </Routes>
  </div>
);

export default App;
