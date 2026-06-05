import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorite() {
    const { favorites } = useMovieContext()

    if (favorites.length === 0) {
        return (
            <div className="favorites-empty">
                <h2>No favorites yet</h2>
                <p>Start adding your favorite movies here!</p>
            </div>
        )
    }

    return (
        <div className="movies-grid">
            {favorites.map(movie => (
                <MovieCard
                    movie={movie}
                    key={movie.id}
                />
            ))}
        </div>
    )
}

export default Favorite