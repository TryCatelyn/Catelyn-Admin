<template>
  <div id="app">
    <ctl-menu></ctl-menu>

    <main id="main">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
  export default {
    name: 'app',
    components: {
      "ctl-menu": Menu
    }
  }
</script>

<style lang="stylus">
  *
    box-sizing border-box

  body
    font-family 'Ubuntu', sans-serif
    background #fff
    margin 0
    padding 0

  a
    transition color .15s ease-out, border .15s ease-out, opacity .15s ease-out, background-color .15s ease-out
    text-decoration none
    color #000
    outline none

  #app
    display flex
    flex-direction row
    align-items stretch
    
  #main
    position absolute
    top 0
    bottom 0
    right 0
    left 170px
    padding: 30px
  .fade-enter-active, .fade-leave-active {
   transition: opacity .2s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active для <2.1.8 */ {
    opacity: 0
  }
</style>
