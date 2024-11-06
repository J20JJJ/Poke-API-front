<template>
    <div class="fondo_info">
        <h1>{{ pokemonName[0] }} <br><br><br> {{pokemonID}} <br><br><br> <button @click="$emit('toggle')">Volver</button></h1>
        <!-- <div v-if="pokemonImg.length === 0">Cargando Pokémon...</div> -->
         <div class="decorar_info">
            <div class="caja_pokemon">
                 <div v-for="(img, index) in pokemonImg" :key="index" class="pokemon">
                     <img v-if="img" :src="img" :alt="pokemonName[0]">    
                 </div>
            </div>
        </div>
        
        

    </div>
</template>

<script setup>


import { defineProps } from 'vue';
  
  const props = defineProps({
      pokemonID: {
          type: Number,
          required: true
      }
  });
  
  console.log("Información del Pokémon con ID:", props.pokemonID);


import { ref, onBeforeMount } from 'vue';

let pokemonImg = ref([]);

let pokemonName = ref([]);
let pokemonUrl = ref([]);

let pokemonID = props.pokemonID;

// sacar especie
async function getPokemonEspecie(ind) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${ind}/`);
    const data = await response.json();
    return {

        evolution_chain_url: data.evolution_chain.url,
        
    };
}

// sacar evolution
async function getPokemonEvolution(indE) {
    console.log("indE: ", indE);
    try {
        const response = await fetch(indE);
        const data = await response.json();

        if (data.chain && Array.isArray(data.chain.evolves_to)) {
            // Recorremos cada evolución en el array evolves_to
            const evolutionUrls = data.chain.evolves_to.map(evolution => evolution.species.url);
            
            return {
                evolution_url: evolutionUrls
            };
        } 
    } catch (error) {
        console.error("Error en getPokemonEvolution:", error);
        return { evolution_url: [] };
    }
}


// sacar IMG
async function getPokemonData(ind) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ind}/`);
    const data = await response.json();
    return {

        front_default: data.sprites.front_default,
        
        name: data.name,
       
    };
}

onBeforeMount(async () => {
    try {
        // sacar especie
        const especie = await getPokemonEspecie(pokemonID)
        // const pokemon = await getPokemonData(pokemonID);

        if (especie) {
            // sacar evolution
            console.log("getPokemonEvolution entra")
            const evolution = await getPokemonEvolution(especie.evolution_chain_url)
            console.log("getPokemonEvolution salir")
            console.log(evolution)

            if(evolution){
                const evolutionIds = evolution.evolution_url.map(url => {

                const parts = url.split('/');
                return parts[parts.length - 2]; 
            });
   
    

            }

        }
    } catch (error) {
        console.error("Error al cargar:", error);
    }
});
</script>

