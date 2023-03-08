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
        computed: {
            movies() {
                return this.store.movies
            },
        },
    }

</script>



<style lang="scss">


</style>