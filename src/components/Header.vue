<template>
  <header class="header">
    <div class="title">
      <h1>{{ title }}</h1>
      <p>{{ dateRange }}</p>
    </div>
    <div class="banner">
      <img src="/header.png" alt="Banner" />
    </div>
    <div class="profile-image">
      <img src="/profile.png" alt="Profile" />
    </div>
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
  position:relative;
  text-align: center;
  margin: 0;
  background: #7344C0;
  font-family: Graphik-medium;

  .title {
    height: 70px;
    margin: 0;
    position:relative;

    h1 {
      margin: 0;
      padding-top: 14px;
      color: white;
      font-size: 15px;
    }

    p {
      margin: 0;
      margin-top: 5px;
      padding: 0;
      font-size: 13px;
    }
  }

  .banner {
    width: 100%;
    margin: 0;
    height: 195px;

    img {
      width: 100%;
    }
  }

  .profile-image {
    position:absolute;
    margin-top: -54px;
    left: calc(50% - 33px);
    width: 66px;
    height: 66px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>