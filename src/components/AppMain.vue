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
                />
            </ul>

            <div class="modal fade" id="cardInfo" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">
                                Modal 1
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">

                            </button>
                        </div>
                        <div class="modal-body">
                            Show a second modal and hide this one with the button below.
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
                                Open second modal
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">

                                </button>
                            </div>
                            <div class="modal-body">
                                Hide this modal and show the first with the button below.
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-danger" data-bs-target="#cardInfo" data-bs-toggle="modal">
                                    Back to first
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
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
        methods: {
            cardClick(index) {
                console.log('card click = ', index)
                
            

            }
        },
    }

</script>



<style lang="scss">

    main {
        height: 90vh;

        .cards {
            display: grid;
            gap: 40px;
            grid-template-columns: repeat(3,1fr);

        }
    }
</style>