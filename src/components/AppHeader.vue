<template>

    <header>
        <div class="container">
            <div class="row">
                <h1 class="col-auto fw-bold title">
                    {{ title }}
                </h1>
                <div class="input-container col-auto">
                    <div class="input-group flex-nowrap">
                        <span @click="isClickInput" class="input-group-text bg-light" id="addon-wrapping">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <input 
                            type="text" 
                            id="input"
                            class="bg-light border-start-0"
                            :class="{ 'big-input': clickInput }"
                            placeholder="Cerca il film che fa per te..."
                            v-model="this.store.inputSearch"
                            @keyup.enter="fetchCard"
                        >
                        <button @click="isClickInput" type="button" class="btn btn-outline-danger">SEARCH</button>
                    </div>
                </div>
                
            </div>
        </div>
    </header>

</template>


<script>
    import axios from 'axios'

    import store from '../store'

    export default {
        data() {
            return {
                title: 'BOOLFLIX',
                store,
                clickInput: false,
            }
        },
        computed: {
            search() {
                return this.store.inputSearch
            },
        },
        methods: {
            fetchCard() {
                console.log('fetchCard')

                this.fetchMovies()

                this.fetchTvSeries()
            },
            fetchMovies() {
            console.log('fetching data');

                axios
                    .get('https://api.themoviedb.org/3/search/movie?api_key=58623a99a2c476889e8b156ffe3ae51b&language=it-IT', {
                        params: {
                            query: this.search,
                        }
                    })
                    .then((res) => {
                        console.log(res.data.results)
                        console.log(res.data)
                        this.store.movies = res.data.results
                    })
            },
            fetchTvSeries() {
            
                axios
                    .get('https://api.themoviedb.org/3/search/tv?api_key=58623a99a2c476889e8b156ffe3ae51b&language=it-IT', {
                        params: {
                            query: this.search,
                        }
                    })
                    .then((res) => {
                        this.store.tvSeries = res.data.results
                        console.log(res.data.results)
                    })
                    
            },
            isClickInput() {
                console.log('buttonclick')
                this.clickInput = true

                this.fetchCard
            },

        },
        // created per vedere il proxy
        created() {
            console.log('store',this.store)
            this.fetchCard()
        },
    }

</script>



<style lang="scss">

    header {
        height: 10vh;
        padding-top: 20px;

        .row {
        align-items: center;
        justify-content: space-between;

        .title {
            font-size: 60px;
            color: red;
        }

            .input-group {
                max-width: 50%;

                .input-group-text {
                border-radius: 1.25rem 0 0 1.25rem;

                }

                input {
                    line-height: 40px;
                    font-size: 20px;
                    border-radius: 25px;
                    padding: 0 20px;
                    width: 0;
                    transition: width 2s;

                    &.big-input {
                        width: 100%;
                    }
                }
            }
        }
    }

   

</style>