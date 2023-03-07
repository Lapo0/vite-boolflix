<template>

    <li>
        <h2>
            {{ movie.title }}
        </h2>
        <h3>
            {{ movie.original_title }}
        </h3>
        <p>
            {{ movie.overview }}
        </p>
        <p>
            {{ movie.vote_average }}
        </p>
    </li>


</template>


<script>
import store from '../store';

    export default {
        props: {
            // passo l'oggetto intero
            movie: {
                type: Object,
                required: true,
            }
        },
        data() {
            return {
                store,
            }
        },
    }

</script>



<style lang="scss">


</style>