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
                    v-model="inputSearch"
                    >
                    <button>SEARCH</button>
                </div>
            </div>
        </div>
    </header>

</template>


<script>

    import store from '../store'

    export default {
        data() {
            return {
                title: 'BOOLFLIX',
                store,
            }
        },
        computed: {
            inputSearch() {
                return this.store.inputSearch
            },
        }
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