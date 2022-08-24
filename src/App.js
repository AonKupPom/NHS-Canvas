import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';
import React from 'react';

const Welcome = React.lazy(() => import('./components/pages/welcome/welcome.component'));
const SellingTents = React.lazy(() => import('./components/pages/selling-tents/selling-tents.component'));

function App() {

  return (
    <div className='root'>
      <Navbar />
      <Routes>
        <Route path="/" element={<React.Suspense fallback='Loading...'> <Welcome /> </React.Suspense>} />
        <Route path="/selling-tents" element={<React.Suspense fallback='Loading...'> <SellingTents /> </React.Suspense>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
