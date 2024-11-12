<template>
    <div class="fondo_info">
        <h1>{{ pokemonName[0] }} <br><br><br> {{pokemonID}} <br><br><br> 
            <router-link :to="'/'">
                <button>hola</button>
            </router-link>
        
        </h1>
        <!-- <div v-if="pokemonImg.length === 0">Cargando Pokémon...</div> -->
         <div class="decorar_info">
            <div class="caja_pokemon">
                 <div v-for="(img, index) in pokemonImg" :key="index" class="pokemon">
                     <img v-if="img" :src="img" :alt="pokemonName[0]">    
                 </div>
            </div>

            <div class="pokemon_info">
                <div class="pokemon_info_2">
                    <h2>Tipo</h2>
                    <div v-for="(i, index) in pokemonTipo" :key="index">{{pokemonTipo[index]}}</div>
                    <br>
                </div>
                
                <div class="pokemon_info_2">
                    <h2>Ataques</h2>
                    <div v-for="(i, index) in pokemonAtaque" :key="index">{{pokemonAtaque[index]}}</div>
                    <br>
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<script setup>


import { defineProps } from 'vue';
  

let route = useRoute();
//   const props = defineProps({
//       pokemonID: {
//           type: Number,
//           required: true
//       }
//   });
  
//   console.log("Información del Pokémon con ID:", props.pokemonID);


import { ref, onBeforeMount } from 'vue';

import { useRoute } from 'vue-router';

let pokemonImg = ref([]);
let pokemonName = ref([]);
let pokemonID = route.params.id
let pokemonTipo = ref([]);
let pokemonAtaque = ref([]);

async function getPokemonData(ind) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ind}/`);
    const data = await response.json();
    return {
        back_default: data.sprites.back_default,
        back_female: data.sprites.back_female,
        back_shiny: data.sprites.back_shiny,
        back_shiny_female: data.sprites.back_shiny_female,
        front_default: data.sprites.front_default,
        front_female: data.sprites.front_female,
        front_shiny: data.sprites.front_shiny,
        front_shiny_female: data.sprites.front_shiny_female,
        
        name: data.name,

        tipos: data.types.map(tipo => tipo.type.name),

        ataques: data.moves.map(a => a.move.name)


        
    };
}

onBeforeMount(async () => {
    try {
        
        const pokemon = await getPokemonData(pokemonID);

        if (pokemon) {
            pokemonImg.value.push(pokemon.back_default);
            pokemonImg.value.push(pokemon.back_female);
            pokemonImg.value.push(pokemon.back_shiny);
            pokemonImg.value.push(pokemon.back_shiny_female);
            pokemonImg.value.push(pokemon.front_default);
            pokemonImg.value.push(pokemon.front_female);
            pokemonImg.value.push(pokemon.front_shiny);
            pokemonImg.value.push(pokemon.front_shiny_female);

            pokemonName.value.push(pokemon.name);
            pokemonID;

            pokemonTipo.value.push(...pokemon.tipos);

            pokemonAtaque.value.push(...pokemon.ataques);

            // console.log(pokemonTipo)
            // console.log(pokemon)
        }
    } catch (error) {
        console.error("Error al cargar:", error);
    }
});
</script>

