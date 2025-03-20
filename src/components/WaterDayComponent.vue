<script setup>
defineProps({
    dia: Number,
    fecha: String,
    nivellAbsolut: String,
    percentatgeVolumEmbassat: String,
    volumEmbassat: String
})



</script>
<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Dia {{ dia }} </h5>
            <p class="card-text">Fecha: {{ fecha }}</p>
            <p class="card-text">Nivell absolut: {{ nivellAbsolut }}</p>
            <p class="card-text">VolumEmbassat (%): {{ percentatgeVolumEmbassat }}</p>
            <p class="card-text">Volum embassat : {{ volumEmbassat }}</p>
        </div>
    </div>
</template>