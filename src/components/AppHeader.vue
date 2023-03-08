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
        methods: {
            fetchCard() {
            console.log('fetching data');

            const search = this.store.inputSearch
            console.log('this is search = ', search)

            axios
                .get('https://api.themoviedb.org/3/search/movie?api_key=58623a99a2c476889e8b156ffe3ae51b&language=it-IT', {
                    params: {
                        query: search,
                    }
                })
                .then((res) => {
                    console.log(res.data.results)
                    console.log(res.data)
                    this.store.movies = res.data.results
                })
            },
        },
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