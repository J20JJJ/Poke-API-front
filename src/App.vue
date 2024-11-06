<script setup>
import { ref, onBeforeMount } from 'vue';
import mainNewComponent from './components/mainNewComponent.vue';
import mainNewComponent_rama from './components/mainNewComponent_rama.vue';
import mostrarInfoPokemon from './components/mostrarInfoPokemon.vue';
import pokedex from './components/pokedex.vue';

let pokemonImg = ref([]);
let pokemonName = ref([]);
let pokemonID = ref([]);
let showMainComponent = ref(true);
let selectedPokemonID = ref(null);

async function getPokemonData(ind) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ind}/`);
    const data = await response.json();
    return {
        img: data.sprites.front_default,
        name: data.name,
        id: data.id
    };
}

onBeforeMount(async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
        const data = await response.json();
        const pokemonPromises = data.results.map((_, index) => getPokemonData(index + 1));
        const pokemons = await Promise.all(pokemonPromises);

        pokemons.forEach(pokemon => {
            if (pokemon) {
                pokemonImg.value.push(pokemon.img);
                pokemonName.value.push(pokemon.name);
                pokemonID.value.push(pokemon.id);
            }
        });
    } catch (error) {
        console.error("Error al cargar:", error);
    }
});

function toggleComponent(pokemonID) {
    selectedPokemonID.value = pokemonID;
    showMainComponent.value = !showMainComponent.value;
}
</script>

<template>
  <header>
    <!-- <mainNewComponent 
      v-if="showMainComponent"
      :pokemonImg="pokemonImg"
      :pokemonName="pokemonName"
      :pokemonID="pokemonID"
      @toggle="toggleComponent" 
    />
    <mostrarInfoPokemon v-else :pokemonID="selectedPokemonID" @toggle="toggleComponent" /> -->

    <!-- <pokedex :pokemonID=12 /> -->

    <mainNewComponent_rama 
      :pokemonID="133"
    />

  </header>
</template>

<style>
@import "./../src/assets/styles.scss";
</style>
