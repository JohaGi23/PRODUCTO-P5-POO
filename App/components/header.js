export function header() {
    document.getElementById("header").innerHTML = `
    <!-- Contenedor principal del encabezado -->
    <div class="headerContent">
    <!-- Contenedor del logo -->
    <div class="logoContainer">
    <h2 class="logoLeft">BYTE</h2>
    <h2 class="logoRight">MASTER INSTITUTE</h2>
    </div>
    <!-- Contenedor de la lista de navegacion -->
    <div class="navListContainer">
    <ul class="navList">
    <li><a href="#" class="navItem">HOME</a></li>
    <li><a href="#" class="navItem">EXPERIENCIAS</a></li>
    <li><a href="#" class="navItem">CONTACTO</a></li>
    <li><a href="#" class="navItem">INICIA SESION</a></li>
    </ul>
    </div>
    </div>
    `
   }