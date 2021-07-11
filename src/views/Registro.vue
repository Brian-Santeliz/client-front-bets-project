<template>
  <section>
    <HeroRegistro />
    <mdb-container>
      <section class="my-5">
        <mdb-row class="justify-content-center">
          <mdb-col lg="8" class="lg-0 mb-4">
            <mdb-card>
              <mdb-card-body>
                <div class="form-header text-center">
                  <h3 class="mt-2">
                    Formulario de registro <mdb-icon icon="user-circle" />
                  </h3>
                </div>
                <p class="dark-grey-text text-center">
                  Completa los dato solicitados en el formulario para crear tu cuenta en <strong>La Quiniela</strong>. Obtendras 255 Coins <mdb-icon icon="dollar-sign" /> de credito para realizar tus primeras apuestas. 
                </p>
                <div class="md-form">
                  <mdb-input
                    icon="user"
                    v-model.trim="cliente.nombre"
                    label="Ingresa tu nombre"
                    iconClass="grey-text"
                    required
                    type="text"
                  />
                </div>
                <div class="md-form">
                  <mdb-input
                    icon="envelope"
                    v-model.trim="cliente.correo"
                    label="Correo electrónico"
                    iconClass="grey-text"
                    type="email"
                    required
                  />
                </div>
                <div class="md-form">
                  <mdb-input
                    icon="lock"
                    v-model.trim="cliente.clave"
                    label="Contraseña"
                    iconClass="grey-text"
                    type="password"
                  />
                </div>
                <div class="text-center">
                  <mdb-btn
                  title="Registrarse"
                    :disabled="deshabilitado"
                    :icon="deshabilitado ? 'circle-notch' : 'user-plus'"
                    :icon-class="deshabilitado ? 'fa-spin' : ''"
                    class="btn btn-block"
                    @click="enviarFormulario"
                    color="danger"
                    >Registrarme
                  </mdb-btn>
                </div>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>
    </mdb-container>
  </section>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbBtn,
  mdbIcon,
  mdbInput,
  mdbTextarea,
  mdbCard,
  mdbCardBody,
} from "mdbvue";
import HeroRegistro from "@/components/HeroRegistro.vue";
import { regEmail } from "@/utils/constante";
import Swal from "sweetalert2";
export default {
  name: "Registro",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbIcon,
    mdbInput,
    mdbTextarea,
    mdbCard,
    mdbCardBody,
    HeroRegistro,
  },
  data() {
    return {
      deshabilitado: false,
      cliente: {
        nombre: "",
        correo: "",
        clave: "",
      },
    };
  },
  methods: {
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
    validarEmail(email) {
      return regEmail.test(String(email).toLowerCase());
    },
    async enviarFormulario() {
      if (!this.cliente.nombre || !this.cliente.correo || !this.cliente.clave) {
        return this.mostrarMensaje(
          "error",
          "Debes completar todos los datos para registrarte."
        );
      }
      if (!this.validarEmail(this.cliente.correo)) {
        return this.mostrarMensaje(
          "error",
          "El correo que inregresaste no es valido, verifique e intente nuevamente."
        );
      }
      if (this.cliente.clave.length < 5) {
        return this.mostrarMensaje(
          "error",
          "La contraseña debe ser minimo de 6 caracteres."
        );
      }
      try {
        this.deshabilitado = true;
        const { data } = await this.axios.post(
          "/cliente/registro-cliente",
          this.cliente
        );
        this.mostrarMensaje("success", data.msg);
        this.deshabilitado = false;
        this.cliente = {
          nombre: "",
          correo: "",
          clave: "",
        };
      } catch (error) {
        this.deshabilitado = false;
        this.mostrarMensaje("error", error.response.data.msg);
      }
    },
  },
};
</script>

<style>
</style>