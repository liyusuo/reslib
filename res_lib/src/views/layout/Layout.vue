<template>
  <div>

    <header-view></header-view>


    <main-view></main-view>

    <div style="width: 100%;height: 200px;background-color: crimson">
    <footer-view></footer-view>
    </div>
  </div>
</template>

<script>
  import {FooterView, HeaderView, MainView,Banner} from './components'

  export default {
    name: "Layout",
    components: {
      FooterView,
      HeaderView,
      MainView,
      Banner,
    },
  }
</script>

<style scoped>

</style>
