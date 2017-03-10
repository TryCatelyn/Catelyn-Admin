import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
      props: { 
        message: "Простоы павып ывап  ывпаыва <br> <img src='https://unsplash.it/800/600'/>" 
      }
    },
    {
      path: '/pages',
      name: 'Test',
      component: Test,
      props: { 
        message: "Страницы" 
      }
    },
    {
      path: '/notes',
      name: 'Test',
      component: Test,
      props: { 
        message: "Заметки" 
      }
    },
    {
      path: '/settings',
      name: 'Test',
      component: Test,
      props: { 
        message: "Настройки" 
      }
    },

  ]
})
