<script setup>
 import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <RouterLink class="m-3 navbar-brand">Examen UF2</RouterLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <RouterLink class="nav-item nav-link active" to="/">Home</RouterLink>
            <RouterLink class="nav-item nav-link" to="/carrito">Carrito de la compra</RouterLink>
            <RouterLink class="nav-item nav-link" to="/water2">Water</RouterLink>
          </div>
        </div>
      </nav>
</template>