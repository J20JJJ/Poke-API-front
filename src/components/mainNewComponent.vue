<template>
    <div class="fondo">
        <h1>Puchadex</h1>
        <div class="caja_pokemon">
            <div v-for="(pokemon, index) in pokemonImg" :key="pokemonID[index]" class="pokemon" @click="$emit('toggle', pokemonID[index])">
                <router-link :to="{ name: 'pokedex', params: { id: pokemonID[index] }}">
                    <img :src="pokemon" :alt="pokemonName[index]">
                    <p>{{ pokemonName[index] }}</p>
                    <p>{{ pokemonID[index] }}</p>
                </router-link>
                
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Definir las props que recibe el componente
const props = defineProps({
    pokemonImg: {
        type: Array,
        required: true
    },
    pokemonName: {
        type: Array,
        required: true
    },
    pokemonID: {
        type: Array,
        required: true
    }
});
</script>
