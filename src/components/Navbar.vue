<template>
  <mdb-navbar color="indigo" dark>
    <mdb-navbar-brand to="/">
      La Quiniela
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav class="margin-left">
        <mdb-nav-item to="/" active> Inicio</mdb-nav-item>
        <mdb-nav-item to="/noticias">Noticias</mdb-nav-item>
        <mdb-nav-item to="/">Apuestas</mdb-nav-item>
        <mdb-nav-item to="/">Equipos</mdb-nav-item>
        <mdb-nav-item to="/">Contacto</mdb-nav-item>
        <mdb-nav-item  to="/">Login</mdb-nav-item>
        <mdb-nav-item to="/registro">Registro</mdb-nav-item>
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle"  waves-fixed><i class="fas fa-user"></i>Luis</mdb-dropdown-toggle>
          <mdb-dropdown-menu class="color">
            <mdb-dropdown-item>Apuestas</mdb-dropdown-item>
            <mdb-dropdown-item>Seguimientos</mdb-dropdown-item>
            <mdb-dropdown-item>Solocitudes de recarga</mdb-dropdown-item>
            <mdb-dropdown-item>Salir</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>



<script>
  import { mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbContainer, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue';
  export default {
    name: 'Navbar',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbContainer,
      mdbDropdown,
      mdbDropdownToggle,
      mdbDropdownMenu,
      mdbDropdownItem
    }
  }
</script>
<style scoped>

.margin-left{
  margin-left: 29em;
}
.color{
  color:white
}
@media screen and (max-width:1261px) {
  .margin-left{
   margin:0
  }
}
</style>