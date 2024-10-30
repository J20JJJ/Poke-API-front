<!-- mainNewComponent.vue -->
<template>
    <div class="fondo">
        <h1>Puchadex</h1>
        <!-- <div v-if="pokemonImg.length === 0">Cargando Pokémon...</div> -->
        <div class="caja_pokemon" ><!-- v-else -->
            <div v-for="(pokemon, index) in pokemonImg" :key="pokemonID[index]" class="pokemon">
                <img :src="pokemon" :alt="pokemonName[index]">
                <p>{{ pokemonName[index] }}</p>
                <p>{{ pokemonID[index] }}</p>
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
