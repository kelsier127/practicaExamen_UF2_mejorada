<script setup>
import { computed } from 'vue';

const props = defineProps({
    dia: Number,
    fecha: String,
    nivellAbsolut: String,
    percentatgeVolumEmbassat: String,
    volumEmbassat: String
});

function formatFecha(fecha) {
    const auxFecha = new Date(fecha);
    const dia = auxFecha.getDate();
    const mes = auxFecha.getMonth() + 1;
    let mesReal = getMes(mes);
    const any = auxFecha.getFullYear();
    return `${dia} de ${mesReal} de ${any}`; 
}

let getMes = (mes) => {
    switch (mes) {
        case 1:
            return "Gener";
        case 2:
            return "Febrer";
        case 3:
            return "Març";
        case 4:
            return "Abril";
        case 5:
            return "Maig";
        case 6:
            return "Juny";
        case 7:
            return "Juliol";
        case 8:
            return "Agost";
        case 9:
            return "Setembre";
        case 10:
            return "Octubre";
        case 11:
            return "Novembre";
        case 12:
            return "Desembre";
    }
}

const fechaReal = computed(() => formatFecha(props.fecha));
</script>

<template>
    <div class="card m-1" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Dia {{ dia }} </h5>
            <p class="card-text">Fecha: {{ fechaReal }}</p>
            <p class="card-text">Nivell absolut: {{ nivellAbsolut }}</p>
            <p class="card-text">VolumEmbassat (%): {{ percentatgeVolumEmbassat }}</p>
            <p class="card-text">Volum embassat : {{ volumEmbassat }}</p>
        </div>
    </div>
</template>
