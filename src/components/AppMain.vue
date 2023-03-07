<template>
    <main>
        <div class="container">
            <ul class="cards">
                <Card v-for="movie in movies"
                :key="movie.id"
                :movie="movie"
                />
            </ul>
        </div>
    </main>

</template>


<script>
    import axios from 'axios'

    import store from '../store'

    import Card from '/src/components/Card.vue'
    
    export default {
        components: {
            Card,
        },
        data() {
            return {
                store,
            }
        },
        methods: {
            fetchCard() {
            console.log('fetching data');


            axios
                .get('https://api.themoviedb.org/3/search/movie?api_key=58623a99a2c476889e8b156ffe3ae51b&query=ritorno+al+fut&language=it-IT', {
                    params: {

                    }
                })
                .then((res) => {
                    console.log(res.data.results)
                    this.store.movies = res.data.results
                })
            },
        },
        created() {
            console.log('store',this.store)
            this.fetchCard()
        },
        computed: {
            movies() {
                return this.store.movies
            }
        }
    }

</script>



<style lang="scss">


</style>