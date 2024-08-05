
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyProject from './MyProject';
import Hello from './Hello';
import Spotify from './Spotify';
import MoviesCard from './MoviesCard';
import MovieDetail from './MovieDetail';
import MovieDetail2 from './MovieDetail2';

function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="hello"element={<Hello/>}/>
       <Route path="project"element={<MyProject/>} />
       <Route path="spotify"element={<Spotify/>} />
       <Route path="movie"element={<MoviesCard/>} />
       <Route path="movies/:MovieName"element={<MovieDetail2/>} />
       <Route path="/" element={<Spotify/>} />
      
     </Routes>
    
    </BrowserRouter>
  );
}

export default App;
