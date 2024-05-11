import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';

const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));

function App() {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
          </Routes>
        </Suspense>
      </Router>
    </main>
  );
}

export default App;
