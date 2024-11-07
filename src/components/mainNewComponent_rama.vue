<template>
    <div class="fondo">
        <h1>Puchadex</h1>
        <div class="caja_pokemon">
            <div v-for="(pokemon, index) in pokemonImg" :key="pokemon_id[index]" class="pokemon" @click="$emit('toggle', pokemon_id[index])">
                <img :src="pokemon" :alt="pokemonName[index]">
                <p>{{ pokemonName[index] }}</p>
                <p>{{ pokemon_id[index] }}</p>
                
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
let pokemon_id = ref([]);

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

        if (data.chain ) {
            const evolutionUrls = [];
            let currentChain = data.chain;

            const evolutionUrls1 = data.chain.evolves_to.map(evolution => evolution.species.url);

            const evolutionUrls2 = [ ...data.chain.evolves_to.flatMap(evolution => [...evolution.evolves_to.map(e => e.species.url)])];

            while (currentChain) {
                if (currentChain.species && currentChain.species.url) {
                    evolutionUrls.push(currentChain.species.url);
                }
                currentChain = currentChain.evolves_to && currentChain.evolves_to[0]; // Pasamos al siguiente eslabón de la cadena de evoluciones
            }

            evolutionUrls1.shift();
            evolutionUrls2.shift();

            const allEvolutionUrls = [...evolutionUrls, ...evolutionUrls1, ...evolutionUrls2];

            return {
                evolution_url: allEvolutionUrls
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
        img: data.sprites.front_default,
        name: data.name,
        id: data.id
    };
}

onBeforeMount(async () => {
    try {
        // sacar especie
        const especie = await getPokemonEspecie(pokemonID)

        if (especie) {
            // sacar evolution
            console.log("getPokemonEvolution entra")
            console.log("especie: ", especie)
            const evolution = await getPokemonEvolution(especie.evolution_chain_url)
            console.log("getPokemonEvolution salir")
            console.log("evolution: ", evolution)

            if(evolution){
                console.log("evolution_url: ", evolution.evolution_url)
                console.log("evolution: ", evolution)
                const evolutionIds = evolution.evolution_url.map(url => {
                    const parts = url.split('/');
                    return parts[parts.length - 2]; 
                });
                
                console.log("evolutionIds: ", evolutionIds)
    
                // assssssssssssssssss
                try {
                    const pokemonPromises = evolutionIds.map((evolutionId) => getPokemonData(evolutionId));



                    
                    const pokemons = await Promise.all(pokemonPromises);
                    console.log("pokemons: ", pokemons)
                    pokemons.forEach(pokemon => {
                        if (pokemon) {
                            pokemonImg.value.push(pokemon.img);
                            pokemonName.value.push(pokemon.name);
                            pokemon_id.value.push(pokemon.id);
                        }
                    });
                } catch (error) {
                    console.error("Error al cargar:", error);
                }
            }

        }
    } catch (error) {
        console.error("Error al cargar:", error);
    }
});
</script>

