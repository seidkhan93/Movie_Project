<template>
  <div>
    <section>
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      >
        Popular Movies
      </h1>

      <ul class="grid grid-cols-5 gap">
        <li v-for="mov in movies" :key="mov.id">
          <MovieCard
              :poster_path="mov.poster_path"
              :title="mov.title"
              :id="mov.id"
              :overview="mov.overview"
              :release_date="mov.release_date"
              :popularity="mov.popularity"
              :item="mov"
          />
        </li>
        <br> <br>
      </ul>

    </section>
    <section>
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      >
        Popular TV Series
      </h1>

      <ul class="grid grid-cols-5 gap">
        <li v-for="ser in series" :key="ser.id">
          <SeriesCard
              :poster_path="ser.poster_path"
              :name="ser.name"
              :overview="ser.overview"
              :first_air_date="ser.first_air_date"
              :popularity="ser.popularity"
              :item="ser"
          />
        </li>
      </ul>

    </section>
  </div>
</template>

<script setup>
const movies = useState(() => [])
const series = useState(() => [])

const {data} = await useFetch('/api/movies/popular', {
  transform: data => {
    movies.value = data.popMovies.results
    series.value = data.popSeries.results

    return true
  }
})
</script>
