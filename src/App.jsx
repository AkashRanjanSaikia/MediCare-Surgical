import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home"
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Refund from './pages/Refund';
import ScrollToTop from './utils/ScrollToTop';
import NewFooter from './Components/layout/NewFooter';
import PageNotFound from './pages/PageNotFound';

function App() {

  return (

    <Router>

       {/* ScrollToTop resets the page's scroll position on route change */}
      <ScrollToTop />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/new" element={<NewFooter />} />
        <Route path="/*" element={<PageNotFound />} />

      </Routes>
    </Router>

  )
}

export default App
