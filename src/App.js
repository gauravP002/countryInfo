import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CountryList from './componenets/CountryList';
import CountryDetail from './componenets/CountryDetail';
import About from './componenets/About';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <nav className="bg-white dark:bg-slate-800 shadow-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="text-xl font-bold text-slate-900 dark:text-white">
                Countries Explorer
              </Link>
              <div className="flex space-x-4">
                <Link to="/" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link to="/about" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<CountryList />} />
            <Route path="/country/:name" element={<CountryDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
