<template>
  <header class="header">
    <h1>{{ title }}</h1>
    <p>{{ dateRange }}</p>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true
    },
    dateRange: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  margin-bottom: 30px;
  
  h1 {
    color: white;
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: 500;
  }
  
  p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
  }
}
</style>