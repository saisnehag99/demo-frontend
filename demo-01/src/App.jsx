import React, { useState } from 'react';
import './App.css';
import Map from './pages/Map.jsx';
import Demo from './pages/Demo.jsx';
import Index from './pages/Index.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('map');

  const renderPage = () => {
    switch (currentPage) {
      case 'map':
        return <Map />;
      case 'demo':
        return <Demo />;
      case 'index':
        return <Index />;
      default:
        return <Map />;
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-brand">
          <h2>Project NANDA</h2>
        </div>
        <div className="nav-links">
          <button 
            className={`nav-link ${currentPage === 'map' ? 'active' : ''}`}
            onClick={() => setCurrentPage('map')}
          >
            Map
          </button>
          <button 
            className={`nav-link ${currentPage === 'demo' ? 'active' : ''}`}
            onClick={() => setCurrentPage('demo')}
          >
            Demo
          </button>
          <button 
            className={`nav-link ${currentPage === 'index' ? 'active' : ''}`}
            onClick={() => setCurrentPage('index')}
          >
            Index
          </button>
        </div>
      </nav>
      
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
