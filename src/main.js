import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue'
import PageA from "./components/PageA";
import PageB from "./components/PageB";
import PageC from "./components/PageC";
import UserVue from "./components/UserVue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/pageA", component: PageA }, 
        { path: "/pageB", component: PageB }, 
        { path: "/pageC", component: PageC }, 
        { path: "/user/:userId", name: "user", component: UserVue },

    ]
})

const app = createApp(App);
app.use(router);
app.mount('#app');
