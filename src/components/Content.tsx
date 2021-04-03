import { MovieCard } from '../components/MovieCard';
import { useContent } from '../hooks/useContent';
import { HeaderContent } from './HeaderContent';

export function Content() {
  const { movies } = useContent();

  return (
    <div className="container">
      <HeaderContent />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}