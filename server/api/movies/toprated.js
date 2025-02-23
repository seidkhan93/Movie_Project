export default defineEventHandler(async event => {
  const runtimeConfig = useRuntimeConfig(event)
  const accessToken = runtimeConfig.AccessToken
  const topRatedMoviesUrl = 'https://api.themoviedb.org/3/movie/top_rated'
  const topRatedSeriesUrl = 'https://api.themoviedb.org/3/tv/top_rated'

  const topRatedMovies = await $fetch(topRatedMoviesUrl, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    }
  })

  const topRatedSeries = await $fetch(topRatedSeriesUrl, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    }
  })

  return {topRatedMovies, topRatedSeries}


})