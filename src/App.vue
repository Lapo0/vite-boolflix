<script>
    import { def } from '@vue/shared';

    import 'bootstrap/dist/js/bootstrap.js'

    import AppHeader from '/src/components/AppHeader.vue'

    import AppMain from '/src/components/AppMain.vue'


    export default {
        components: {
          AppHeader,
          AppMain,
        }
    }

</script>

<template>

  <div class="back">

    <AppHeader />
    <AppMain />
  </div>

</template>

<style lang="scss">

    @use '/src/style/general.scss';

  .back {
    background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTteZdNLC-5NugELeMXh_yLLEVmQ1AxDis4JA&usqp=CAU);
    background-position: center;
  }

</style>
