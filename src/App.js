import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage.jsx"
import CardsPage from './pages/CardsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/cards" element={<CardsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;