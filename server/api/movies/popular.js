export default defineEventHandler(async event => {
  const runtimeConfig = useRuntimeConfig(event)
  const accessToken = runtimeConfig.AccessToken
  const popularMoviesUrl = 'https://api.themoviedb.org/3/movie/popular'
  const popularSeriesUrl = 'https://api.themoviedb.org/3/tv/popular'

  const popMovies = await $fetch(popularMoviesUrl, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    }
  })

  const popSeries = await $fetch(popularSeriesUrl, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    }
  })

  return {popMovies, popSeries}


})