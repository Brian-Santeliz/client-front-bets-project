<template>
  <section>
       <template v-if="cargando">
      <Spinner />
    </template>
    <template v-else>
       <template v-if="!apuestas.length">
         <h3 class="mt-5 text-center font-weight-bold ">
          No existen apuestas registradas actualmente. Ponte en contácto con los administradores.
        </h3>
       </template>
       <template v-else>
           <h2 class="h1-responsive font-weight-bold text-center my-5 titulo text-uppercase">
          Apuestas registradas en La Quiniela
        </h2>
        <p class="text-center w-responsive mx-auto mb-5 gray-text">
         Proximás apuestas definidas. Puedes apostar por un equipo y ganan recompenza de coins. Recuerda que para apostar debes iniciar sesión.
        </p>
        
           mostrar
       </template>
    </template>    
  </section>
</template>

<script>
import Swal from "sweetalert2";
import Spinner from "@/components/Spinner";
export default {
  name: "Apuestas",
  components: {
    Spinner,
  },
  data() {
    return {
      apuestas: [],
      apuestasGanadas: [],
      cargando: false,
      deshabilitado: false,
    };
  },
  created(){
     this.obtenenerApuestas()
  },
  methods: {
    async obtenenerApuestas() {
      try {
        this.cargando = true;
        const { data } = await this.axios.get(
          "/obtener-apuestas"
        );
        this.apuestas = data;
        this.cargando = false;
      } catch (error) {
        this.cargando = false;
        this.mostrarMensaje("error", error.response.data.msg);
      }
    },
    mostrarMensaje(tipoIcono, mensaje) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: tipoIcono,
        title: mensaje,
      });
    },
  },
};
</script>

<style>
</style>