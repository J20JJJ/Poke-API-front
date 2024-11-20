<template>
  <div class="pokedex">
    <div class="panel left-panel">
      <div class="pokemon-name screen">
        {{ pokemonName }}
        <span class="name-no">no. {{ route.params.id }}</span>
      </div>

      <div class="pokemon-sprite-container">
        <!-- Usamos el índice 'currentImageIndex' para mostrar la imagen correspondiente -->
        <img :src="pokemonImg[currentImageIndex]" alt="pokemon" class="pokemon-sprite">
        <div class="sprite-controls">
          <div class="sprite-control sprite-controls-gender" @click="changeToGender">
            <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 512 512">
              <path
                d="M337.8 14.8C341.5 5.8 350.3 0 360 0L472 0c13.3 0 24 10.7 24 24l0 112c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-24.7 24.7C407 163.3 416 192.6 416 224c0 80.2-59 146.6-136 158.2l0 25.8 24 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-24 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-25.8C155 370.6 96 304.2 96 224c0-88.4 71.6-160 160-160c39.6 0 75.9 14.4 103.8 38.2L382.1 80 343 41c-6.9-6.9-8.9-17.2-5.2-26.2zM448 48s0 0 0 0s0 0 0 0s0 0 0 0zM352 224a96 96 0 1 0 -192 0 96 96 0 1 0 192 0z" />
            </svg>
          </div>
          <div class="sprite-control sprite-controls-shiny" @click="changeToShiny">
            <span>shiny</span>
          </div>
          <div class="sprite-control sprite-controls-rotate" @click="rotateImage">
            <svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 512 512">
              <path
                d="M212.3 224.3H12c-6.6 0-12-5.4-12-12V12C0 5.4 5.4 0 12 0h48c6.6 0 12 5.4 12 12v78.1C117.8 39.3 184.3 7.5 258.2 8c136.9 1 246.4 111.6 246.2 248.5C504 393.3 393.1 504 256.3 504c-64.1 0-122.5-24.3-166.5-64.2-5.1-4.6-5.3-12.6-.5-17.4l34-34c4.5-4.5 11.7-4.7 16.4-.5C170.8 415.3 211.6 432 256.3 432c97.3 0 176-78.7 176-176 0-97.3-78.7-176-176-176-58.5 0-110.3 28.5-142.3 72.3h98.3c6.6 0 12 5.4 12 12v48c0 6.6-5.4 12-12 12z" />
            </svg>
          </div>
        </div>
      </div>
      <router-link :to="'/'">
        <sus style='width: 100%;' :imgBTN="pokemonImg[0]" />
      </router-link>

      <div class="pokemon-description screen">
        {{ description }}
      </div>

    </div>


    <div class="divider">
      <div class="gap"></div>
      <div class="hinge"></div>
      <div class="gap"></div>
      <div class="hinge"></div>
      <div class="gap"></div>
      <div class="hinge"></div>
      <div class="gap"></div>
    </div>

    <div class="panel right-panel">
      <div class="panel-row">
        <div class="type-list">
          <div class="panel-header">Tipo</div>
          <div class="type-box">
            <div v-for="(tipo, index) in pokemonTipo" :key="index" class="type" :class="tipo">{{ tipo }}</div>
          </div>
        </div>
      </div>
      <div class="panel-header">Evolución</div>
      <div class="panel-row panel-evo scroll_evos">
        <div class="flex-center pokemon-sprite" v-for="(evolution, index) in pokemonEvolution" :key="index">
          <router-link :to="{ name: 'pokedex', params: { id: evolution.id } }" style="display: contents;">
            <div class="evo-num"> {{ evolution.id }}</div>
            <img :src="evolution.img" :alt="evolution.name" class="pokemon-sprite-evo" />
            <div class="name-evo">{{ evolution.name }}</div>
          </router-link>
        </div>
      </div>

      <div class="panel-moves">
        <div class="panel-header">Moves</div>
        <div class="move-list scroll_moves">
          <div v-for="(move, index) in pokemonAtaque" :key="index" class="type">{{ move }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import sus from './elementos/sus.vue';

import { ref, onBeforeMount, watch } from 'vue';

const currentImageIndex = ref(0);

function rotateImage() {
  switch (currentImageIndex.value) {
    case 0: {
      currentImageIndex.value = 4
      break;
    }
    case 1: {
      currentImageIndex.value = 5
      break;
    }
    case 2: {
      currentImageIndex.value = 6
      break;
    }
    case 3: {
      currentImageIndex.value = 7
      break;
    }
    case 4: {
      currentImageIndex.value = 0
      break;
    }
    case 5: {
      currentImageIndex.value = 1
      break;
    }
    case 6: {
      currentImageIndex.value = 2
      break;
    }
    case 7: {
      currentImageIndex.value = 3
      break;
    }
  }
}

function changeToShiny() {
  switch (currentImageIndex.value) {
    case 0: {
      currentImageIndex.value = 2
      break;
    }
    case 2: {
      currentImageIndex.value = 0
      break;
    }
    case 1: {
      currentImageIndex.value = 3
      break;
    }
    case 3: {
      currentImageIndex.value = 1
      break;
    }
    case 4: {
      currentImageIndex.value = 6
      break;
    }
    case 6: {
      currentImageIndex.value = 4
      break;
    }
    case 5: {
      currentImageIndex.value = 7
      break;
    }
    case 7: {
      currentImageIndex.value = 5
      break;
    }
  }
}

function changeToGender() {

  if (!pokemonImg.value[1] == "") {

    switch (currentImageIndex.value) {
      case 0: {
        currentImageIndex.value = 1
        break;
      }
      case 1: {
        currentImageIndex.value = 0
        break;
      }
      case 2: {
        currentImageIndex.value = 3
        break;
      }
      case 3: {
        currentImageIndex.value = 2
        break;
      }
      case 4: {
        currentImageIndex.value = 5
        break;
      }
      case 5: {
        currentImageIndex.value = 4
        break;
      }
      case 6: {
        currentImageIndex.value = 7
        break;
      }
      case 7: {
        currentImageIndex.value = 6
        break;
      }
    }
  }
}

const pokemonImg = ref([]);
const pokemonName = ref('');
const pokemonTipo = ref([]);
const pokemonAtaque = ref([]);
const pokemonEvolution = ref([]);

let description = ref([]);


import { useRoute } from 'vue-router';
const props = defineProps({
    id: Number,
});

// import { watch } from 'vue-router';


let route = useRoute();
let pokemonID = props.id;
console.log("props.pokemonID: ", props.id)

const pokemonIDProp = props.id;

// Watcher para detectar cuando cambia el id en la URL
watch(
  () => route.params.id,
  async (newId, oldId) => {
    console.log('El id cambió de', oldId, 'a', newId)
    sacar_info(newId);
  },
  { immediate: true }
);

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

    id: data.id,
    name: data.name,
    tipos: data.types.map(tipo => tipo.type.name),
    ataques: data.moves.map(a => a.move.name)  // Solo mostramos los primeros 5 ataques por simplicidad
  };
}

// Función para obtener la especie del Pokémon
async function getPokemonEspecie(ind) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${ind}/`);
  const data = await response.json();
  return {
    evolution_chain_url: data.evolution_chain.url,
    description1: data.flavor_text_entries[0].flavor_text
  };
}

// Función para obtener la evolución
async function getPokemonEvolution(indE) {
  try {
    const response = await fetch(indE);
    console.log("sdsd: ", indE)
    const data = await response.json();

    if (data.chain) {
      const evolutionUrls = [];
      let currentChain = data.chain;

      //evolutiones con piedras
      const evolutionUrls1 = data.chain.evolves_to.map(evolution => evolution.species.url);

      //evolutiones normales
      const evolutionUrls2 = [...data.chain.evolves_to.flatMap(evolution => [...evolution.evolves_to.map(e => e.species.url)])];

      //evolutiones normales
      while (currentChain) {
        if (currentChain.species && currentChain.species.url) {
          evolutionUrls.push(currentChain.species.url);
        }
        currentChain = currentChain.evolves_to && currentChain.evolves_to[0];
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
    return { allEvolutionUrls: [] };
  }
}

async function sacar_info(pokemon1){

  // Limpiar los datos anteriores antes de cargar nuevos
  pokemonImg.value = [];
  pokemonTipo.value = [];
  pokemonAtaque.value = [];
  pokemonEvolution.value = [];

  const pokemon = await getPokemonData(pokemon1);

  if (pokemon) {
      pokemonImg.value.push(pokemon.front_default);
      pokemonImg.value.push(pokemon.front_female);
      pokemonImg.value.push(pokemon.front_shiny);
      pokemonImg.value.push(pokemon.front_shiny_female);
      pokemonImg.value.push(pokemon.back_default);
      pokemonImg.value.push(pokemon.back_female);
      pokemonImg.value.push(pokemon.back_shiny);
      pokemonImg.value.push(pokemon.back_shiny_female);

      pokemonName.value = pokemon.name;
      pokemonTipo.value.push(...pokemon.tipos);
      pokemonAtaque.value.push(...pokemon.ataques);

      console.log("pokemonAtaque: ", pokemonAtaque.value)

      // Obtener la especie para obtener la evolución
      const especie = await getPokemonEspecie(pokemon1);
      if (especie) {
        console.log("especie: ", especie)
        // Obtener la evolución
        const evolution = await getPokemonEvolution(especie.evolution_chain_url);
        description = especie.description1

        if (evolution) {
          const evolutionIds = evolution.evolution_url.map(url => {
            const parts = url.split('/');
            return parts[parts.length - 2]; // Obtener el ID de la evolución
          });

          const pokemonPromises = evolutionIds.map(id => getPokemonData(id));
          const pokemons = await Promise.all(pokemonPromises);

          pokemons.forEach(pokemon => {
            if (pokemon) {
              pokemonEvolution.value.push({
                img: pokemon.front_default,
                name: pokemon.name,
                id: pokemon.id
              });
            }
          });
          console.log("pokemonEvolution: ", pokemonEvolution.value)
        }
      }
    }
}

onBeforeMount(async () => {
  try {
    // Obtener la data del Pokémon
   
    sacar_info(pokemonIDProp);

    
  } catch (error) {
    console.error("Error al cargar la información del Pokémon:", error);
  }
});
</script>