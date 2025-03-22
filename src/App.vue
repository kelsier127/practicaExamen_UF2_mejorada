<script setup>
import NavComponent from '@/components/NavComponent.vue'
import { useRoute,useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const goBack = () => {
  if(route.fullPath.includes('/Embassament')){
    router.push('/water2')
  }else{
    router.push('/')
  }
}
</script>

<template>
  <div>
    <header>  
      <div class="wrapper">
  
        <NavComponent/>
      </div>
    </header>
    <button class="btn btn-primary" @click="goBack">
      VOLVER
    </button>
    <RouterView />
  </div>
  
</template>

<style scoped>

</style>
