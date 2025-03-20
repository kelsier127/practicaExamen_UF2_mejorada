<script setup>
import NavComponent from '@/components/NavComponent.vue'
</script>

<template>
  <div>
    <header>  
      <div class="wrapper">
  
        <NavComponent/>
      </div>
    </header>

    <RouterView />
  </div>
  
</template>

<style scoped>

</style>
