const API_KEY = "a06931194792d91838b3c80e1441ce45"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    )

    const data = await response.json()
    return data.results
}

export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    )

    const data = await response.json()
    return data.results
}
export const getMovieDetails = async (id) => {
    const response = await fetch(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    )

    const data = await response.json()
    return data
}


export const getRandomMovie = async (
  genreId,
  minRating
) => {

  const randomPage =
    Math.floor(Math.random() * 50) + 1

  let url =
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&vote_average.gte=${minRating}&page=${randomPage}`

  if (genreId !== 0) {
    url += `&with_genres=${genreId}`
  }

  const response = await fetch(url)

  const data = await response.json()

  return data.results[
    Math.floor(
      Math.random() *
      data.results.length
    )
  ]
}
