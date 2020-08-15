<template>
  <router-link to="/">
    <img alt="Vue logo" src="./assets/logo.png" />
  </router-link>

  <div>
    <router-link to="/hello">
      hello
    </router-link>
    <router-link to="/page2">
      page2
    </router-link>
  </div>

  <router-view />
</template>

<script>
  export default {
    name: 'App',
  }
</script>