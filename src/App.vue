<template>
    <div>
    <Navbar />
    <transition name="animacion" mode="out-in">
      <div class="contenedor-vista">
    <router-view :key="$route.fullPath"/>
      </div>
    </transition>
    <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
    name:"App", 
    components:{
        Navbar,
        Footer
    }
}
</script>
<style scoped>
.animacion-enter-active,
.animacion-leave-active {
  transition: opacity 0.5s;
}
.animacion-enter,
.animacion-leave-to {
  opacity: 0;
}
.contenedor-vista{
  min-height: 100vh;
}

</style>

