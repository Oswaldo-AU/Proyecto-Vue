<template>
    <div class="sidebar">
        <h2>Bienvenido</h2>
        <h3>Nombre: {{ nombre }}</h3>
        <h3>Email: {{ email }}</h3>
        <ul>
            <li><router-link to="/contador">Contador</router-link></li>
            <li><router-link to="/lista-de-tareas">Lista de tareas</router-link></li>
            <li><router-link to="/registrar">Registrar</router-link></li>
        </ul>
    </div>
</template>

<script setup>
import { useRegistarStore } from '@/modules/registro/stores/registrarStore';
import { ref, watch } from 'vue';
const registrarStore = useRegistarStore();
const nombre = ref(registrarStore.nombre.value);
const email = ref(registrarStore.email.value);
watch(() => registrarStore.nombre, (newValue) => {
    nombre.value = newValue
});

watch(() => registrarStore.email, (newValue) => {
    email.value = newValue
});
</script>

<style>
.sidebar {
    width: 200px;
    background-color: rgb(191, 191, 191);
    padding: 20px;
}

</style>