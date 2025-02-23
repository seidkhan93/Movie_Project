export default defineEventHandler(async event => {

  const query = getQuery(event)
  const config = useRuntimeConfig(event)
  const {AccessToken} = config
  const {searchTerm} = query

  const movieSearchUrl = 'https://api.themoviedb.org/3/search/movie'
  const seriesSearchUrl = 'https://api.themoviedb.org/3/search/tv'

  const movie = await $fetch(movieSearchUrl, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AccessToken}`,
    },
    query: {
      query: searchTerm
    }
  })

  const series = await $fetch(seriesSearchUrl, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AccessToken}`,
    },
    query: {
      query: searchTerm
    }
  })

  return {movie, series}

})