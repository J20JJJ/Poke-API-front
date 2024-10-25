<template>
    <div class="fondo">
        <h1>Puchadex</h1>
        <!-- <div>
            <input type="text" placeholder="Nombre del pokemón Ej. ivysaur" style="padding: 10px; width: 300px;">
            <button style="padding: 10px;">Buscar</button>
        </div> -->
        <div class="caja_pokemon">
            <div v-for="(pokemon,index) in pokemonImg" :key= "index" class="pokemon">
                <img :src="pokemon" :alt="pokemonName[index]">
                <p>{{ pokemonName[index] }}</p>
                <p>{{ pokemonID[index] }}</p>
            </div>
        </div>
    </div>

</template>


<script setup >
    import{ref,onBeforeMount} from 'vue';
    let pokemonImg=ref([]);
    let pokemonName=ref([]);
    let pokemonID=ref([]);

    function getPokemonData(ind){
        fetch(`https://pokeapi.co/api/v2/pokemon-form/${ind}/`)
            .then(response=>response.json())
            .then(data=>{
                pokemonImg.value.push(data.sprites.front_default)
            });
    }
    
    function getIdPokemon(ind){
        fetch(`https://pokeapi.co/api/v2/pokemon/${ind}/`)
            .then(response => response.json())
            .then(data => {
                pokemonID.value.push(data.id);
            });
    }
        
    onBeforeMount( async() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
            .then(response=>response.json())
            .then(data=>{
                data.results.forEach((pokemon, index) => {

                getPokemonData(index + 1)
                pokemonName.value.push(pokemon.name);

                getIdPokemon(index + 1)
                // pokemonID.value.push(pokemon.id);
                
            })
        });
    });
</script>

