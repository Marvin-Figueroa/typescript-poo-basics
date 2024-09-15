import CabeceraPagina, { Alineacion } from "./modules/CabeceraPagina";
import Calculadora from "./modules/Calculadora";

import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>TypeScript POO Exercises</h1>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

// --------------------Ejercicio #1 - Cabecera Pagina --------------------------

console.warn("Ejercicio #1 - Cabecera Pagina");

const cabecera = new CabeceraPagina("Mi Página", "#000", "Arial");

// Obtener las propiedades
console.log(cabecera.obtenerPropiedades());

// Establecer la alineación
cabecera.establecerAlineacion(Alineacion.Centro);

// Imprimir todas las propiedades
cabecera.imprimirPropiedades();

// --------------------Ejercicio #2 - Calculadora --------------------------

console.warn("Ejercicio #2 - Calculadora");

console.log("5 + 3 = ", Calculadora.sumar(5, 3)); // 8
console.log("5 - 3 = ", Calculadora.restar(5, 3)); // 2
console.log("5 * 3 = ", Calculadora.multiplicar(5, 3)); // 15
console.log("10 / 2 = ", Calculadora.dividir(10, 2)); // 5
console.log("2 ** 3 = ", Calculadora.potencia(2, 3)); // 8
console.log("5! = ", Calculadora.factorial(5)); // 120
