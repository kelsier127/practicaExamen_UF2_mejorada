<script setup>
import { defineProps, onMounted, watch } from 'vue'
let props = defineProps(['producto'])

onMounted(() => {
    if(props.producto){
        console.log(props.producto)
        if(props.producto.prioritat){
            let p = document.getElementById(props.producto.id).classList.add('prioritat')
        }
        if(props.producto.comprat){
            let p = document.getElementById(props.producto.id).classList.add('comprat')
        }
    }
})
</script>

<template>
    <p :id="`${producto.id}`">{{ `${producto.nom} - Prioritat: ${producto.prioritat} - Comprat: ${producto.comprat}` }}</p>
</template>

<style scoped>
.prioritat{
    font-weight: bold;
    color: red;
}
.comprat{
    color: green !important;
    text-decoration: line-through;
}

</style>