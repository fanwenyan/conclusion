import Vue from 'vue'
import Router from 'vue-router'
import mainframe from '@/components/mainframe'
import home from '@/components/home'
import edit from '@/components/edit'
import draft from '@/components/draft'
import collection from '@/components/collection'
import upload from '@/components/upload'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/mainframe',
      component: mainframe,
      children: [
        { name: 'home', path: '/home', component: home },
        { name: 'edit', path: '/edit', component: edit },
        { name: 'draft', path: '/draft', component: draft },
        { name: 'collection', path: '/collection', component: collection },
        { name: 'upload', path: '/upload', component: upload }
      ]
    }
    // { path: '*', component : notFound }
  ]
})
