import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import MoviePage from './components/MoviePage/MoviePage';
import Navbar from './components/Navbar/Navbar'
import NotFound from './components/NotFound/NotFound';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='*' exact element={<NotFound />} />
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />
        <Route path='/movie/:id' exact element={<MoviePage />} />
        <Route path='/tv/:id' exact element={<MoviePage />} />
        <Route path='/show/:id' exact element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
