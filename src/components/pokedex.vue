
<template>
    <div class="pokedex">
      <div class="panel left-panel">
        <div class="pokemon-name screen">
          {{ pokemonName }}
          <span class="name-no">no. {{ pokemonID }}</span>
        </div>

        <div class="pokemon-sprite-container">
            <!-- Usamos el índice 'currentImageIndex' para mostrar la imagen correspondiente -->
            <img :src="pokemonImg[currentImageIndex]" alt="pokemon" class="pokemon-sprite">
            <div class="sprite-controls">
            <div class="sprite-control sprite-controls-gender" @click="changeToGender">
                <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 512 512"><path d="M337.8 14.8C341.5 5.8 350.3 0 360 0L472 0c13.3 0 24 10.7 24 24l0 112c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-24.7 24.7C407 163.3 416 192.6 416 224c0 80.2-59 146.6-136 158.2l0 25.8 24 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-24 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-25.8C155 370.6 96 304.2 96 224c0-88.4 71.6-160 160-160c39.6 0 75.9 14.4 103.8 38.2L382.1 80 343 41c-6.9-6.9-8.9-17.2-5.2-26.2zM448 48s0 0 0 0s0 0 0 0s0 0 0 0zM352 224a96 96 0 1 0 -192 0 96 96 0 1 0 192 0z"/></svg>
            </div>
            <div class="sprite-control sprite-controls-shiny" @click="changeToShiny">
                <span>shiny</span>
            </div>
            <div class="sprite-control sprite-controls-rotate" @click="rotateImage">
                <svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 512 512"><path d="M212.3 224.3H12c-6.6 0-12-5.4-12-12V12C0 5.4 5.4 0 12 0h48c6.6 0 12 5.4 12 12v78.1C117.8 39.3 184.3 7.5 258.2 8c136.9 1 246.4 111.6 246.2 248.5C504 393.3 393.1 504 256.3 504c-64.1 0-122.5-24.3-166.5-64.2-5.1-4.6-5.3-12.6-.5-17.4l34-34c4.5-4.5 11.7-4.7 16.4-.5C170.8 415.3 211.6 432 256.3 432c97.3 0 176-78.7 176-176 0-97.3-78.7-176-176-176-58.5 0-110.3 28.5-142.3 72.3h98.3c6.6 0 12 5.4 12 12v48c0 6.6-5.4 12-12 12z"/></svg>
            </div>
            </div>
        </div>
        <router-link :to="'/'">
            <sus style='width: 100%;'
            :imgBTN = "pokemonImg[0]"
            />
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
            <router-link :to="{ name: 'pokedex', params: { id: evolution.id }}">
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
import sus from './sus.vue';

  import { ref, onBeforeMount } from 'vue';

  const currentImageIndex = ref(0);

function rotateImage() {
  switch(currentImageIndex.value){
    case 0:{
        currentImageIndex.value = 4
        break;
    }
    case 1:{
        currentImageIndex.value = 5
        break;
    }
    case 2:{
        currentImageIndex.value = 6
        break;
    }
    case 3:{
        currentImageIndex.value = 7
        break;
    }
    case 4:{
        currentImageIndex.value = 0
        break;
    }
    case 5:{
        currentImageIndex.value = 1
        break;
    }
    case 6:{
        currentImageIndex.value = 2
        break;
    }
    case 7:{
        currentImageIndex.value = 3
        break;
    }
  }
}

function changeToShiny() {
  switch(currentImageIndex.value){
    case 0:{
        currentImageIndex.value = 2
        break;
    }
    case 2:{
        currentImageIndex.value = 0
        break;
    }
    case 1:{
        currentImageIndex.value = 3
        break;
    }
    case 3:{
        currentImageIndex.value = 1
        break;
    }
    case 4:{
        currentImageIndex.value = 6
        break;
    }
    case 6:{
        currentImageIndex.value = 4
        break;
    }
    case 5:{
        currentImageIndex.value = 7
        break;
    }
    case 7:{
        currentImageIndex.value = 5
        break;
    }
  }
}

function changeToGender() {

   if(!pokemonImg.value[1] == ""){

       switch(currentImageIndex.value){
         case 0:{
             currentImageIndex.value = 1
             break;
         }
         case 1:{
             currentImageIndex.value = 0
             break;
         }
         case 2:{
             currentImageIndex.value = 3
             break;
         }
         case 3:{
             currentImageIndex.value = 2
             break;
         }
         case 4:{
             currentImageIndex.value = 5
             break;
         }
         case 5:{
             currentImageIndex.value = 4
             break;
         }
         case 6:{
             currentImageIndex.value = 7
             break;
         }
         case 7:{
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
  const pokemonEvolution = ref([]);  // Para las evoluciones

  const pokemonID_Evolution = ref([]);

  let description = ref([]);
  
  const props = defineProps({
    pokemonID: {
      type: Number,
      required: true
    }
  });
  
  import { useRoute } from 'vue-router';
  let route = useRoute();

  let pokemonID = route.params.id

  const pokemonIDProp = pokemonID;  
  
  // Función para obtener la data del Pokémon (nombre, imágenes, tipo y ataques)
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
      console.log("sdsd: ",indE)
      const data = await response.json();
  
      if (data.chain ) {
            const evolutionUrls = [];
            let currentChain = data.chain;

            //evolutiones con piedras
            const evolutionUrls1 = data.chain.evolves_to.map(evolution => evolution.species.url);

            //evolutiones normales
            const evolutionUrls2 = [ ...data.chain.evolves_to.flatMap(evolution => [...evolution.evolves_to.map(e => e.species.url)])];

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
  
  onBeforeMount(async () => {
    try {
      // Obtener la data del Pokémon
      const pokemon = await getPokemonData(pokemonIDProp);
  
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
        const especie = await getPokemonEspecie(pokemonIDProp);
        if (especie) {
            console.log("especie: ",especie)
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
      ajustarAltura()
    } catch (error) {
      console.error("Error al cargar la información del Pokémon:", error);
    }
  });
  </script>
  
  



<!-- ggssssssssssssssssssss -->

<style scoped>

.panel-moves{
    display: flex;
    flex-direction: column;
    height: 100%;
}

.scroll_moves {
    overflow-y: auto;
    min-height: 160px; 
    max-height: 180px; 
}

.scroll_evos {
    overflow-y: auto;
    min-height: 345px;
    max-height: 350px; 
}

    h1 {
    color: white;
}
/* ::-webkit-scrollbar {
    display: none;
} */

body {
    margin: 0;
    padding: 0;
    background: linear-gradient(
        15deg,
        rgba(41, 41, 41, 1) 4%,
        rgba(49, 49, 49, 1) 24%,
        rgba(128, 128, 128, 1) 64%,
        rgba(138, 138, 138, 1) 70%,
        rgba(230, 230, 230, 1) 81%,
        rgba(255, 255, 255, 1) 86%,
        rgba(220, 220, 220, 1) 89%,
        rgba(230, 230, 230, 1) 100%
    );
    background-color: #09a8ff;
    background-blend-mode: overlay;
}

#root {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.pokedex {
    background-color: #e61515;
    width: 848px;
    margin: 0 auto;
    padding: 1em;
    border-radius: 15px;
    border: double black 10px;
    display: flex;
}

.panel {
    width: 359px;
    padding: 10px;
    border: inset #b31818 3px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
}

.right-panel {
    padding: 0;
    width: 379px;
}

.panel-row {
    display: flex;
    border-bottom: groove #757575 3px;
    justify-content: space-evenly;
}

.panel-row:last-child {
    border-top: groove #757575 3px;
    border-bottom: none;
}

.divider {
    display: flex;
    flex-direction: column;
    width: 30px;
    margin: 0 20px;
    align-items: center;
    border: inset #460f0f 4px;
    border-radius: 4px;
    background: #460f0f;
}

.divider > * {
    border-radius: 4px;
    border: solid #2d0d0d 2px;
}

.hinge {
    background: linear-gradient(90deg, #891313 0, #b31818 30%, #e61515 45%, #fd5555 65%, #e61515 95%);
    border-right-color: #fd5555;
    border-top-color: #fd5555;
    flex: 10;
    width: 100%;
    border-left-color: #5f1010;
}
.gap:first-child {
    border-radius: 0 0 5px 5px;
    border-top: none;
}
.gap:last-child {
    border-radius: 5px 5px 0 0;
}
.gap {
    background: linear-gradient(90deg, #460f0f 0, #891313 30%, #b31818 45%, #fd5555 65%, #b31818 95%);
    border-top-color: #891313;
    border-right-color: #b31818;
    flex: 1;
    width: 95%;
}
.screen {
    background: linear-gradient(14deg, rgb(165, 205, 83) 60%, rgb(193, 217, 144) 65%);
    padding: 5px;
    border-radius: 3px;
    font-family: "VT323";
    border: inset #879a65 3px;
}
.pokemon-name {
    font-size: 28px;
    letter-spacing: 4px;
    text-transform: capitalize;
    height: 45px;
    box-sizing: border-box;
}
.name-no {
    float: right;
    text-transform: lowercase;
}
.pokemon-description {
    font-size: 18px;
    letter-spacing: 0;
    min-height: 115px;
    box-sizing: border-box;
    flex: 1;
}
.pokemon-sprite {
    width: 100%;
    display: flex;
    image-rendering: pixelated;
    border: inset #9aa28b 3px;
    border-radius: 5px;
    margin: 10px 0;
    box-sizing: border-box;
    background: linear-gradient(15deg, #cad5b5 64%, #dde2d4 70%, #dde2d4 81%, #fff 86%, #dde2d4 89%, #dde2d4 100%);
}
.sprite-controls {
    display: flex;
    justify-content: space-around;
    font-family: "Staatliches", cursive;
    margin-bottom: 10px;
}

.sprite-control {
    height: 30px;
    width: 30px;
    border: groove grey 3px;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(60deg);
    color: black;
    padding: 1px;
    border-color: #b06868;
}

.sprite-control:hover {
    border-color: #b8ed7c;
}
.sprite-control:active {
    border-color: #f4fcb9;
}

.sprite-control > * {
    transform: rotate(-60deg);
}

.sprite-controls-shiny {
    transform: rotate(0);
    background: linear-gradient(14deg, #bf8823 10%, #ffee90 25%, #e6a617 47%, #ffee90 73%, #fff6c8 74%, #ffee90 80%);
    border-color: #cdb589;
    width: 90px;
    text-shadow: white -1px 1px;
}

.sprite-control-selected {
    border-color: #b8ed7c;
}

.sprite-controls-shiny > * {
    transform: rotate(0);
}
.pokemon-sprite-small {
    height: 120px;
    width: 120px;
    margin: 3px 0;
}
/* types */
.type {
    color: rgba(0, 0, 0, 0.9);
    text-transform: capitalize;
    font-size: 1.25em;
    padding: 2px;
    margin: 2px;
    border: groove #757575 3px;
    border-radius: 10px;
    width: 150px;
    font-family: "Staatliches", cursive;
    text-align: center;
    letter-spacing: 2px;
    text-shadow: rgba(255, 255, 255, 0.3) -1px 1px;
    align-self: center;
    background: linear-gradient(
        15deg,
        rgba(128, 128, 128, 0.5) 64%,
        rgba(138, 138, 138, 0.5) 70%,
        rgba(230, 230, 230, 0.5) 81%,
        rgba(255, 255, 255, 0.5) 86%,
        rgba(220, 220, 220, 0.5) 89%,
        rgba(230, 230, 230, 0.5) 100%
    );
    background-blend-mode: hard-light;
}
.panel-header {
    text-transform: capitalize;
    font-size: 1.25em;
    padding: 5px;
    font-family: "Staatliches", cursive;
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(14deg, #460f0f 0, #891313 30%, #b31818 45%, #fd5555 65%, #b31818 95%);
    border: groove #e61515 3px;
    border-width: 3px 2px;
    text-shadow: #fd5555 -1px 1px;
}
.type-list {
    display: flex;
    flex-direction: column;
    border-left: groove #757575 3px;
    flex: 1;
}
.type-box {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-evenly;
    background: linear-gradient(14deg, #afafaf 50%, #ffffff 80%, #afafaf 90%);
    border-top: groove #757575 3px;
}
.stats {
    width: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 5px;
    flex: 1;
}
.stat-line {
    font-size: 17px;
    text-transform: capitalize;
}
.panel-evo {
    flex-wrap: wrap;
}
.empty-evo {
    background: linear-gradient(15deg, #83887b 64%, #8b8f81 70%, #8b8f81 81%, #babfb1 86%, #8b8f81 89%, #8b8f81 100%);
    display: flex;
    justify-content: center;
    align-items: center;
}
.poke-ball {
    border: solid black 4px;
    background: black;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    position: relative;
    opacity: 0.8;
}
.poke-ball-top {
    background: #83887a;
    flex: 1;
    width: 100%;
    opacity: 0.3;
}
.poke-ball-center {
    display: flex;
    width: 22px;
    height: 22px;
    border: solid black 4px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 10px;
}
.poke-ball-dot {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: black;
    border: solid #83887a 6px;
}
.poke-ball-bottom {
    background: #83887a;
    flex: 1;
    width: 100%;
}
.evo-header {
    width: 100%;
    /* background: linear-gradient(14deg, #460f0f 0, #891313 30%, #b31818 45%, #fd5555 65%, #b31818 95%);
    border: groove #e61515 3px;
    border-width: 5px 0;
    text-shadow: #fd5555 -1px 1px; */
    margin-bottom: 2px;
}
.evo-num {
    /* padding: 2px;
    font-size: 16px;
    font-weight: bold;
    background-blend-mode: color-dodge;
    background: linear-gradient(
        15deg,
        rgba(128, 128, 128, 0.5) 64%,
        rgba(138, 138, 138, 0.5) 70%,
        rgba(230, 230, 230, 0.5) 81%,
        rgba(255, 255, 255, 0.5) 86%,
        rgba(220, 220, 220, 0.5) 89%,
        rgba(230, 230, 230, 0.5) 100%
    );
    background-color: #3a3b38;
    border-radius: 13px;
    border-color: #888888;
    text-shadow: #888888 -1px 1px;
    width: 50%; */
    font-family: "Staatliches", cursive;
    font-size: 1.25em;
    letter-spacing: 2px;
    background: transparent;
    border: none;
    text-shadow: #e78181 -1px 1px;
}
.evo-name {
    width: auto;
    padding: 3px;
    margin-bottom: 3px;
    text-align: right;
}
.blue-buttons {
    flex-wrap: wrap;
    padding: 5px;
}
.blue-button {
    height: 30px;
    flex: 1 1 16%;
    margin: 3px;
    border: groove #6c96e6 3px;
    border-radius: 5px;
    background: linear-gradient(
        15deg,
        rgba(128, 128, 128, 0.5) 64%,
        rgba(138, 138, 138, 0.5) 70%,
        rgba(230, 230, 230, 0.5) 81%,
        rgba(255, 255, 255, 0.5) 86%,
        rgba(220, 220, 220, 0.5) 89%,
        rgba(230, 230, 230, 0.5) 100%
    );
    background-blend-mode: hard-light;
    background-color: #09a8ff;
}
.move-list {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-evenly;
    background: linear-gradient(14deg, #afafaf 50%, #ffffff 80%, #afafaf 90%);
    border-top: groove #757575 3px;

}
.move-screen {
    margin: 3px;
    padding: 10px 20px;
    flex: 1;
}
.move-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 3px;
}
.move-name {
    font-size: 24px;
    border-bottom: solid black 2px;
    /* padding: 0 5px; */
    margin-bottom: 3px;
    text-align: center;
    text-transform: capitalize;
}
.move-type {
    font-size: 18px;
    text-transform: uppercase;
    border: solid black 2px;
    border-radius: 7px;
    padding: 2px 10px;
    text-align: center;
}
.move-body {
    display: flex;
    justify-content: space-between;
}
.move-learn {
    /* font-size: 20px; */
    float: right;
    margin-right: 3px;
}
.move-status {
    text-transform: capitalize;
    margin-right: 3px;
    margin-top: 3px;
}
.move-controls {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 10px 0 7px;
}
.move-arrow {
    height: 40px;
    width: 40px;
    font-size: 37px;
    border: groove grey 3px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: #e78181 -1px 1px;
    cursor: pointer;
    transform: rotate(60deg);
}
.move-arrow > * {
    transform: rotate(-60deg);
}
.move-arrow:first-child > * {
    padding-bottom: 5px;
}
.move-arrow:last-child > * {
    padding-top: 1px;
}
.move-arrow:hover {
    border-color: rgb(184, 237, 124);
}
.move-arrow:active {
    border-color: rgb(244, 252, 185);
}
.down-arrow {
    background: yellow;
}
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.controls {
    display: flex;
    justify-content: space-around;
    padding: 15px;
}
.button {
    padding: 5px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: outset rgb(248, 187, 187) 6px;
    transform: rotate(60deg);
    background: radial-gradient(
        circle farthest-corner at 40% 25%,
        rgb(218, 237, 241) 9%,
        rgb(124, 214, 237) 20%,
        rgb(64, 90, 165) 62%,
        rgb(43, 125, 196) 100%
    );
    cursor: pointer;
}
.button:hover {
    background: radial-gradient(
        circle farthest-corner at 40% 25%,
        rgb(233, 241, 218) 9%,
        rgb(184, 237, 124) 20%,
        rgb(64, 165, 106) 62%,
        rgb(43, 196, 145) 100%
    );
}
.button:active {
    background: radial-gradient(
        circle farthest-corner at 40% 25%,
        rgb(229, 255, 181) 9%,
        rgb(204, 237, 124) 20%,
        rgb(103, 165, 64) 62%,
        rgb(66, 204, 40) 100%
    );
}
.button::after {
    border: groove #460f0f 5px;
    content: "";
    width: 60px;
    height: 60px;
    position: absolute;
    border-radius: 50%;
    left: -10px;
    top: -10px;
    border-style: double;
    opacity: 0.75;
}
.prev {
    border-right: 30px solid white;
}
.num {
    color: blue;
}
.next {
    border-left: 30px solid white;
}
.num-input {
    width: 50px;
    font-size: 20px;
    height: 30px;
    text-align: right;
    align-self: center;
}

.submit {
    width: 66px;
    height: 18px;

    border: groove #5f845e 3px;
    background-color: #5ed75e;
    border-radius: 20px;
    box-sizing: border-box;
    margin-top: 3px;
    cursor: pointer;
}
.submit:hover {
    border-color: #85ec4d;
}

.normal {
    background-color: #bfbfbf;
}
.fighting {
    background-color: #d87c58;
}
.flying {
    background-color: #999ade;
}
.poison {
    background-color: #925192;
}
.ground {
    background-color: #dea761;
}
.rock {
    background-color: #897864;
}
.bug {
    background-color: #b1c967;
}
.ghost {
    background-color: #c195dc;
}
.steel {
    background-color: #49769c;
}
.fire {
    background-color: #cf1414;
}
.water {
    background-color: #1689de;
}
.grass {
    background-color: #47a047;
}
.electric {
    background-color: #e6b700;
}
.psychic {
    background-color: #fa43b8;
}
.ice {
    background-color: #98c3de;
}
.dragon {
    background-color: #89315d;
}
.dark {
    background-color: #282433;
}
.fairy {
    background-color: #dca0ce;
}
.unknown {
    background-color: #545454;
}
.shadow {
    background-color: #364163;
}

  </style>
  