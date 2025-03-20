<script setup>
import { useRoute } from "vue-router";
import useFetchData from '../components/composables/UseFetchData.js'
import WaterDayComponent from '../components/WaterDayComponent.vue'
let embassament = useRoute().params.embassament

let variable_embassament = embassament.replaceAll(" ", '%20')

let url = `https://analisi.transparenciacatalunya.cat/resource/gn9e-3qhr.json?$query=SELECT%20%60dia%60%2C%60estaci%60%2C%60nivell_absolut%60%2C%60percentatge_volum_embassat%60%2C%60volum_embassat%60%20WHERE%20%60estaci%60%20=%20%27${variable_embassament}%27%20ORDER%20BY%20%60dia%60%20DESC%20LIMIT%20100`

let {data,embassaments} = useFetchData(url)


</script>
<template>
    <h1> {{embassaments[0]}}</h1>
    <WaterDayComponent v-for="(data, index) in data" 
    :key="index" 
    :dia=index+1
    :fecha=data.dia
    :nivellAbsolut=data.nivell_absolut
    :percentatgeVolumEmbassat=data.percentatge_volum_embassat
    :volumEmbassat=data.volum_embassat
    />
</template>