<script setup>
import {ref, watch} from 'vue'
import ProductoListaComponent from '../components/ProductoListaComponent.vue'

const arrayProductes = ref([])  

const nomProducte = {
  id:arrayProductes.value.length,
  nom: '',
  prioritat: false,
  comprat: false
}

const imprimir = () => {
  console.log(nomProducte)
}

const anyadir = () => {
  console.log("ejecutando funcion añadir")
  if(nomProducte.nom != ''){
    let objeto = {
      id:arrayProductes.value.length,
      nom: nomProducte.nom,
      prioritat: nomProducte.prioritat,
      comprat: nomProducte.comprat
    }
    arrayProductes.value.push(objeto)
    console.log(arrayProductes.value)
  }else{
    alert("No has introducido ningún producto")
  }
}

</script>

<template>
  <h2>Lista de prioridades de la compra</h2>
  <input type="text" v-model="nomProducte.nom" placeholder="Producto que quieres comprar">
  <input type="checkbox" v-model="nomProducte.prioritat" id="prioritat" name="prioritat" value="1">Prioritat
  <input type="checkbox" v-model="nomProducte.comprat" id="comprat" name="comprat" value="1">Comprat
  <button @click="anyadir">click para añadir</button>
  <ul class="d-flex flex-column-reverse">
    <li v-for="producte in arrayProductes" :key="producte">
      <ProductoListaComponent :producto="producte"/>
    </li>
  </ul>
</template>

<style scoped>
li{
  all:unset;
}
</style>
