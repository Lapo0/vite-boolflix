<template>

    <li>
        <h3>{{ movie.title }}</h3>
    <h4>{{ movie.original_title }}</h4>
    <p>{{ movie.overview }}</p>
    <p>{{ movie.vote_average }}</p>
    </li>


</template>


<script>
    export default {
        props: {
            // passo l'oggetto intero
            movie: {
                type: Object,
                required: true,
            }
        }
    }

</script>



<style lang="scss">


</style>