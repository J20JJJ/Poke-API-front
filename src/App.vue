<script setup>

import mainNewComponent_rama from './components/mainNewComponent_rama.vue';
import mostrarInfoPokemon from './components/mostrarInfoPokemon.vue';
import pokedex from './components/pokedex.vue';
</script>

<template>
  <header>

    <RouterView/>

    <!-- <pokedex :pokemonID=133 /> -->

    <!-- <mainNewComponent_rama 
      :pokemonID=1
    /> -->

  </header>
</template>

<style>
@import "./../src/assets/styles.scss";
</style>
