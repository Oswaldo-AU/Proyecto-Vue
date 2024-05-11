import { defineStore } from "pinia";
import { ref } from "vue";

export const useRegistarStore = defineStore('registrar',() => {
    const nombre = ref('');
    const email = ref('');
    const guardarRegitro = (nombreFormulario, emailFormulario) => {
        nombre.value = nombreFormulario;
        email.value = emailFormulario;
    }
    return {nombre, email, guardarRegitro}
});