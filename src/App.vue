<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li>
        <h2>
          <router-link to="/">/</router-link>
        </h2>
      </li>
      <li>
        <h2>
          <router-link to="/test">Test</router-link>
        </h2>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
#app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 60px
</style>
