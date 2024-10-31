<template>
    <div class="main-indvInfo">
        <router-link to='/'>
            <button>Atras</button>
            <!-- <div class="poke-img"> 
                <img :src="img" alt="name">
            </div>
            <span>{{ number + " " + name }}</span> -->
        </router-link>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router'

    let route = useRoute(); 
    let id = ref(route.params.id);
    // let name = ref(route.params.name)


</script>