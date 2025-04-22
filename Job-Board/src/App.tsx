import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JobDetails from './pages/JobDetails';
import { useDarkMode } from './assets/DarkModeContext';
import { useEffect } from 'react';

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <button onClick={toggleDarkMode} className="p-2 bg-primary-dark text-white rounded">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job/:id" element={<JobDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
