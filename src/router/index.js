import GetOriginal from '@/components/GetOriginal.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Contact from "@/components/Contact";
import Trainer from "@/components/Trainer";
import Top10 from "@/components/Top10";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/original',
    name: 'original',
    component: GetOriginal
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/trainer',
    name: 'trainer',
    component: Trainer
  },
  {
    path: '/top10',
    name: 'top10',
    component: Top10
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
