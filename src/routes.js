import { createRouter, createWebHistory} from 'vue-router'
// import Vue from 'vue'
// import AppPage from './App.vue'
import HomePage from './assets/pg/HomePage.vue'
import SinglePokePage from './assets/pg/SinglePokePage.vue'

// Vue.useAttrs(Router)

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
            {
                path: '/',
                name: 'home',
                // component: AppPage,
                children:[
                    {
                        path: '',
                        component: HomePage
                    },
                    {
                      path: 'pokemon/:id',
                      name: "singlePokePage",
                      component: SinglePokePage
                    }
                ]
            }
            // {
            //     path: '/prueba',
            //     name: 'prueba',
            //     component: PruebaPage
            // }
        ]

})

export default router