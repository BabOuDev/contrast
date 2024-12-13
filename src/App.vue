<template>
  <div id="app">
    <ImageProcessor />
  </div>
</template>

<script>
import ImageProcessor from './components/ImageProcessor.vue'

export default {
  name: 'App',
  components: {
    ImageProcessor
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: rgba(31, 31, 31, 0.92);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

#app {
  font-family: Graphik-medium;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 782px;
  display: flex;
  align-items: center;
}
</style>