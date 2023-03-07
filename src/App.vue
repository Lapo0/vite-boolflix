<script>
    import { def } from '@vue/shared';

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

  <AppHeader />
  <AppMain />

</template>

<style lang="scss">

    @use '/src/style/general.scss';

</style>
