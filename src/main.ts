import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Page2 from './components/Page2.vue'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/', redirect: "/hello"
    },
    {
      path: '/hello', component: HelloWorld
    },
    {
      path: '/page2', component: Page2
    }
  ]
})

createApp(App).use(router).mount('#app')
