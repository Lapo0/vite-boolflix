<template>

    <header>
        <div class="container">
            <div class="row">
                <h1>
                    {{ title }}
                </h1>
                <div class="input-search">
                    <input 
                    type="text" 
                    placeholder="Cerca il film che fa per te..."
                    v-model="this.store.inputSearch"
                    @keyup.enter="fetchCard"
                    >
                    <button @click="fetchCard">SEARCH</button>
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
        },
        
        // created per vedere il proxy
        created() {
            console.log('store',this.store)
            this.fetchCard()
        },
    }

</script>



<style lang="scss">

    .row {
        align-items: center;
        justify-content: space-between;

        input {
            line-height: 40px;
            font-size: 20px;
            border-radius: 25px;
            padding: 0 20px;
        }
    }

</style>