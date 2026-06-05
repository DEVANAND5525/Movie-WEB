import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getMovieDetails } from "../services/api"
import "../css/MovieDetails.css"
import { useNavigate } from "react-router-dom"
import { useMovieContext } from "../contexts/MovieContext"

function MovieDetails() {
    const {
  isFavorite,
  addToFavorites,
  removeFromFavorites,
} = useMovieContext()
    const { id } = useParams()
    const navigate = useNavigate()

    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)
    const favorite = movie ? isFavorite(movie.id) : false;
    const handleFavorite = () => {
  if (!movie) return;

  if (favorite) {
    removeFromFavorites(movie.id);
  } else {
    addToFavorites(movie);
  }
};

const handleRandomMovie = async () => {
  try {
    
    navigate(`/movie/${randomMovie.id}`);
  } catch (error) {
    console.log(error);
  }
};

    useEffect(() => {
        const loadMovie = async () => {
            try {
                const data = await getMovieDetails(id)
                setMovie(data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        loadMovie()
    }, [id])

    if (loading) {
        return <h2>Loading...</h2>
    }

        return (
  <div className="movie-details">

    <div className="top-buttons">
      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

     
    </div>

    <div className="movie-details-content">

      <img
        className="movie-details-poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <div className="movie-details-info">

        <h1>{movie.title}</h1>

        <button
          className={`favorite-detail-btn ${
            favorite ? "active" : ""
          }`}
          onClick={handleFavorite}
        >
          {favorite
            ? "❤️ Remove Favorite"
            : "🤍 Add Favorite"}
        </button>

        <div className="movie-meta">
          <span>⭐ {movie.vote_average?.toFixed(1)}</span>
          <span>📅 {movie.release_date}</span>
          <span>⏱️ {movie.runtime} min</span>
        </div>

        <div className="genre-list">
          {movie.genres?.map((genre) => (
            <span
              className="genre"
              key={genre.id}
            >
              {genre.name}
            </span>
          ))}
        </div>

        <p className="overview">
          {movie.overview}
        </p>

      </div>

    </div>
  </div>
);

}

export default MovieDetails