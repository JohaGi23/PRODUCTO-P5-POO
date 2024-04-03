export function App() {
  document.getElementById("root").innerHTML = `
  <div class="mainContent">
    <article class="article">
      <picture class="containerArticleImage">
        <img class="articleImage" src="https://lovtechnology.com/wp-content/uploads/2023/06/Principios-de-Programacion-Orientada-a-Objetos-Guia-para-Desarrolladores.jpg.webp">
      </picture>
      <div class="articleText">
        <h3 class="articleTitle">¡ÚNETE AL MUNDO POO!</h3>
        <p class="articleP">
          Empieza tu viaje en la programación orientada a objetos hoy y desbloquea tu potencial como desarrollador de software.
        </p>
      </div>
    </article>
    <div class="divSection">
      <section class="sectionContent">
        <h3 class="sectionTitle">¿Por qué deberías aprender programación orientada a objetos (POO)?</h3>
        <p class="sectionP">La POO es mucho más que una técnica de programación, es un paradigma que te permite desarrollar software de manera más eficiente y robusta.

          En la programación orientada a objetos, los programas se estructuran en torno a objetos, que son entidades que encapsulan datos y funcionalidades relacionadas. Esta organización permite una mayor modularidad, reutilización de código y facilita la gestión y mantenimiento del software a medida que crece en complejidad.
          
          Al comprender los principios fundamentales de la POO, como la encapsulación, la herencia y el polimorfismo, puedes escribir código más limpio, modular y fácil de entender. Además, la POO fomenta una mentalidad de diseño centrada en los objetos, lo que te permite abordar problemas de manera más intuitiva y efectiva.</p>
      </section>
      <!-- Aqui comienza el Formulario de registro -->
      <form class="asideContent">
        <h4>Registro</h4>
        <label for="username">Nombre de usuario:</label>
        <input type="text" id="username" name="username">
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" name="email">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password">
        <button type="submit">Registrarse</button>
      </form>
    </div>
  </div>
  `;
}
