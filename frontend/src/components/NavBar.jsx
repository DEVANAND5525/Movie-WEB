import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/Navbar.css";
import { getRandomMovie } from "../services/api";

function NavBar() {
  const navigate = useNavigate();
    const [selectedRating, setSelectedRating] = useState(7)
  const [selectedGenre, setSelectedGenre] = useState(28);

  const genres = [
    { id: 0, name: "All Movies" },
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 18, name: "Drama" },
    { id: 14, name: "Fantasy" },
    { id: 27, name: "Horror" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Sci-Fi" },
    { id: 53, name: "Thriller" },
  ];
  <select
  className="rating-select"
  value={selectedRating}
  onChange={(e) => setSelectedRating(Number(e.target.value))}
>
  <option value={5}>5+</option>
  <option value={6}>6+</option>
  <option value={7}>7+</option>
  <option value={8}>8+</option>
  <option value={9}>9+</option>
</select>

  const handleRandomMovie = async () => {
    try {
      const movie = await getRandomMovie(
  selectedGenre,
  selectedRating
)
      navigate(`/movie/${movie.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="nav-bar">
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>

        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>

        <select
          className="genre-select"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(Number(e.target.value))}
        >
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>

        <button className="random-btn" onClick={handleRandomMovie}>
          🎲 Random
        </button>
      </div>
    </nav>
  );
}

export default NavBar;