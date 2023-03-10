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
            cardClick(index) {
                console.log('card click = ', index)
                this.store.idCard = index
                
                this.fetchActors()

                this.store.selectedCard = this.movies.find(movie => movie.id === this.idCard) || this.series.find(serie => serie.id === this.idCard);
                console.log(this.store.selectedCard)
            },
            fetchActors() {
                console.log(this.store.idCard)
                
                axios
                    .get(`https://api.themoviedb.org/3/movie/${this.store.idCard}/credits?api_key=58623a99a2c476889e8b156ffe3ae51b`, {
                        params: {
                            person_id: this.store.idCard
                        }
                    })
                    .then((res) => {
                        console.log(res.data.cast[0].name)
                        console.log(res.data.cast[0].character)
                        console.log(res.data.cast[0].id)

                        this.store.cast = res.data.cast
                        console.log(this.store.cast)
                    })
            }
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