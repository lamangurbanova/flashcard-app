import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Cards from './pages/Cards.jsx';
import ContactPage from './pages/ContactPage.jsx';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;