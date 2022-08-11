import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookedShow from './BookedShow/BookedShow';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bookedShow' element={<BookedShow />} />
        <Route path='/movieDetails/:id' element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
