<template>
    <main>
        <div class="container">
            <ul class="cards">
                <Movie v-for="movie in movies"
                :key="movie.id"
                :card="movie"
                @click="cardClick(movie.id)"
                data-bs-target="#cardInfo" data-bs-toggle="modal"
                />
            </ul>
            <ul class="cards">
                <TvSeries v-for="serie in series"
                :key="serie.id"
                :card="serie"
                @click="cardClick(serie.id)"
                data-bs-target="#cardInfo" data-bs-toggle="modal"
                />
            </ul>

            <ModalToggle />

            
        </div>
    </main>

</template>


<script>
    import store from '../store'
    
    import axios from 'axios'

    import '@fortawesome/fontawesome-free/css/all.css'

    import Movie from '/src/components/Movie.vue'

    import TvSeries from '/src/components/TvSeries.vue'

    import ModalToggle from '/src/components/ModalToggle.vue'
    

    export default {
        components: {
            Movie,
            TvSeries,
            ModalToggle,
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
            idCard() {
                return this.store.idCard
            },
        },
        methods: {
            cardClick(id) {

                console.log('card click = ', id)
                this.store.idCard = id

                const selectedMovie = this.movies.find(movie => movie.id === id)
                const selectedSerie = this.series.find(serie => serie.id === id)
                
                if (selectedMovie) {
                    this.store.selectedCard = selectedMovie
                    this.fetchActorsMovie()
                } else if (selectedSerie) {
                    this.store.selectedCard = selectedSerie
                    this.fetchActorsSerie()
                }
            },
            fetchActorsMovie() {
                console.log(this.store.idCard)
                
                axios
                    .get(`https://api.themoviedb.org/3/movie/${this.store.idCard}/credits?api_key=58623a99a2c476889e8b156ffe3ae51b`, {
                        
                    })
                    .then((res) => {
                        console.log(res.data.cast[0].name)
                        console.log(res.data.cast[0].character)

                        this.store.cast = res.data.cast
                        console.log(this.store.cast)
                    })
            },
            fetchActorsSerie() {
                console.log(this.store.idCard)
                
                axios
                    .get(`https://api.themoviedb.org/3/tv/${this.store.idCard}/credits?api_key=58623a99a2c476889e8b156ffe3ae51b`, {
                        
                    })
                    .then((res) => {
                        console.log(res.data.cast[0].name)
                        console.log(res.data.cast[0].character)

                        this.store.cast = res.data.cast
                        console.log(this.store.cast)
                    })
            },
        },
    }

</script>



<style lang="scss">

    main {
        min-height: 90vh;
        padding: 40px 0;

        .cards {
            display: grid;
            gap: 40px;
            grid-template-columns: repeat(4,1fr);

            & > *:hover {
                transform: scale(1.1);
                filter: drop-shadow(16px 16px 20px red)
            }
        }

        .modal-footer {
            justify-content: space-between;
        }

        .modal-body .flag{
            margin-left: auto;
        }
    }
</style>