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
  background: #673AB7;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 0;
}

#app {
  font-family: system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>