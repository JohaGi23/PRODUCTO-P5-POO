import { header } from "./components/header.js";
import { App } from "./App.js";
import { footer } from "./components/footer.js";

// Este archivo se encarga de iniciar la aplicación cuando el DOM está cargado
document.addEventListener("DOMContentLoaded", () => {

  header(); // Llama a la función para renderizar el encabezado  
  App();// Llama a la función para renderizar el contenido principal de la aplicación
  footer();// Llama a la función para renderizar el pie de página
});
