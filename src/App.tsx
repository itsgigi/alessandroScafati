import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import CurriculumPage from './pages/CurriculumPage';
import BookPage from './pages/BookPage';
import PressPage from './pages/PressPage';
import PressDetailsPage from './pages/PressDetailsPage';
import ContattiPage from './pages/ContattiPage';
import './App.css';
import Header from './components/navigation/Header';
import Footer from './components/navigation/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/eventi" element={<EventsPage />} />
        <Route path="/eventi/:eventId" element={<EventDetailPage />} />
        <Route path="/curriculum" element={<CurriculumPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/press" element={<PressPage />} />
        <Route path="/press/:articleId" element={<PressDetailsPage />} />
        <Route path="/contatti" element={<ContattiPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;