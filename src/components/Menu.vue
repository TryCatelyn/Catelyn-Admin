<template>
  <nav :class="{ show: !show() }">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" id="menu-toggle" v-on:click="show(true)">
          <path d="M3 5h18q.4 0 .7.3t.3.7-.3.7-.7.3h-18q-.4 0-.7-.3t-.3-.7.3-.7.7-.3zM3 17h18q.4 0 .7.3t.3.7-.3.7-.7.3h-18q-.4 0-.7-.3t-.3-.7.3-.7.7-.3zM3 11h18q.4 0 .7.3t.3.7-.3.7-.7.3h-18q-.4 0-.7-.3t-.3-.7.3-.7.7-.3z"></path>
      </svg>
      <ul>
          <li>
              <h2>Публикации</h2>
              <ul>
                  <li><router-link to="/">Записи</router-link></li>
                  <li><router-link to="pages">Страницы</router-link></li>
                  <li><router-link to="notes">Заметки</router-link></li>
              </ul>
          </li>
          <li>
              <h2>Контент</h2>
              <ul>
                  <li><router-link to="settings">Медиа</router-link></li>
                  <li><router-link to="test">Теги</router-link></li>
                  <li><router-link to="/">Меню</router-link></li>
              </ul>
          </li>
          <li>
              <h2>Сайт</h2>
              <ul>
                  <li><router-link to="settings">Настройки</router-link></li>
                  <li><router-link to="/">Генерация</router-link></li>
              </ul>
          </li>
      </ul>
  </nav>
</template>

<script>
  export default {
    name: 'menu',
    methods: {
      show: function (revers = false) {
        if (revers) this.$root.menu = !this.$root.menu
          
        return this.$root.menu
      }
    }
  }
</script>

<style lang="stylus" scoped>
  width = 160px

  nav
    background #282c37
    position absolute
    top 0
    bottom 0
    overflow-y visible
    width width
    transition transform 0.45s
    z-index 10

    & > ul
      padding-top 10px
      
  ul, li
    margin 0
    padding 0
    list-style none

  #menu-toggle
    cursor pointer
    position absolute
    left width + 10px
    top 20px
    fill #888

  h2
    color #64707e
    font-size 13px
    font-weight 600
    text-transform uppercase
    margin 24px 0 6px 10px
      
  a
    display flex
    color #9ba5b0
    font-size 13px
    letter-spacing 1px
    font-weight 500
    padding 8px 0 8px 20px
    transition color 0.15s ease-out
      
    &:hover
      color #fff

  .show
    transform translateX(-100%)

</style>
