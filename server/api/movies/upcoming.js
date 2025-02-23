export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  const {AccessToken} =  config

  const upcomingMoviesUrl = 'https://api.themoviedb.org/3/movie/upcoming'

  const upcomingMovies = await $fetch(upcomingMoviesUrl, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AccessToken}`,
    }
  })

  return {upcomingMovies}

})