import { createRouter, createWebHistory } from 'vue-router'

import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Skill from "@/views/Blog.vue"
import Portfolio from "@/views/Portfolio.vue"
import Blog from "@/views/Blog.vue"
import Contact from "@/views/Contact.vue"
import Post from '@/components/Post.vue';
import NotFound from "@/components/NotFound.vue"
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/skills', component: Skill }, 
    { path: '/portfolio', component: Portfolio },
    { path: '/blog', component: Blog },
    { path: '/contact', component: Contact },
    {
        path: '/post/:id', // Ensure this matches the route you are trying to access
        name: 'post',
        component: Post,
      },
      {path: '/:pathMatch(.*)*', component: NotFound}
];


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router