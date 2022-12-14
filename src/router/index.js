import Vue from 'vue'
import VueRouter from 'vue-router'
import page1 from "@/views/page1.vue"
// import page2 from "@/views/del.vue"
import page3 from "@/views/page3.vue"
import test from "@/views/pagetest.vue"
import loding from "@/views/loding.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/root',
    name: 'loding',
    component: loding,
    meta: { title: "情感花园" }
  },
  {
    path: '/',
    name: 'page1',
    component: page1,
    meta: { title: "情感花园" }
  },
  {
    path: '/page2',
    name: 'page2',
    // component: page2
    component: test,
    meta: { title: "情感花园" }
  }, {
    path: '/page3',
    name: 'page3',
    component: page3,
    meta: { title: "情感花园" }
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, form, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
    next()
  }
  next()
})

export default router
