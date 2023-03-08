<template>
    <main>
        <div class="container">
            <ul class="cards">
                <Movie v-for="movie in movies"
                :key="movie.id"
                :card="movie"
                />
            </ul>
            <ul class="cards">
                <TvSeries v-for="serie in series"
                :key="serie.id"
                :card="serie"
                />
            </ul>
        </div>
    </main>

</template>


<script>
    import store from '../store'

    import '@fortawesome/fontawesome-free/css/all.css'

    import Movie from '/src/components/Movie.vue'

    import TvSeries from '/src/components/TvSeries.vue'
    
    export default {
        components: {
            Movie,
            TvSeries,
        },
        data() {
            return {
                store,
            }
        },
        computed: {
            movies() {
                return this.store.movies
            },
            series() {
                return this.store.tvSeries
            },
        },
    }

</script>



<style lang="scss">


</style>