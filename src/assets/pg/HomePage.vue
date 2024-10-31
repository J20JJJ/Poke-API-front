<template>
    <h1>Pokedex</h1>
     <MainComponent 
        :pokemonImg="pokemonImg"
        :pokemonName="pokemonName"
        :pokemonID="pokemonID"
     />
</template>

<script setup>
    import{ref,onBeforeMount} from 'vue';
    import MainComponent from '@/components/mainNewComponent.vue';

    let pokemonImg=ref([]);
    let pokemonName=ref([]);
    let pokemonID=ref([]);

    async function getPokemonData(ind){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${ind}/`);
        
        const data = await response.json();
        return{
            img: data.sprites.front_default,
            name: data.name,
            id: data.id
        }
    }
    
    onBeforeMount( async() => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
        const data = await response.json();
        //const pokemonPromises = data.results.map((_, index) => getPokemonData(index + 1));
        const pokemons = await Promise.all(data.results.map((_, index) => getPokemonData(index + 1)));

        console.log(pokemons);

        pokemons.forEach(pokemon => {
            if (pokemon) {
                pokemonImg.value.push(pokemon.img);
                pokemonName.value.push(pokemon.name);
                pokemonID.value.push(pokemon.id);
            }
        })
    });
   
</script>