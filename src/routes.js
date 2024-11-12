import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './assets/pg/HomePage.vue';
import mostrarInfoPokemon from './components/mostrarInfoPokemon.vue';
import pokedex from './components/pokedex.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            children: [
                {
                    path: '',
                    component: HomePage
                },
                {
                    path: 'pokemon/:id',
                    name: 'pokedex',
                    component: pokedex
                }
                
            ]
        }
    ]
});

export default router;
