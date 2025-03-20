<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { RouterLink } from 'vue-router'
import useFetchData from '../components/composables/UseFetchData.js'

let url = 'https://analisi.transparenciacatalunya.cat/resource/gn9e-3qhr.json'

let {data,embassaments} = useFetchData(url)


</script>

<template>
  <h2 class="title">New water view</h2>
  <ul>
    <li v-for="(nom,index) in embassaments" :key="index">
      <RouterLink :to="`/water2/${nom}`"> Embassament Nº {{ index+1 }}: {{ nom }} </RouterLink>
    </li>
  </ul>
</template>

<style>

</style>
