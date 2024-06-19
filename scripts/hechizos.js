const url = "https://harry-potter-api.onrender.com/hechizos";
const $gridHechizos = document.getElementById("grid-hechizos");
const $inputH = document.getElementById("searchH");

fetch(url)
	.then((res) => res.json())
	.then((data) => {
	
let hechizos = data;
console.log(hechizos);

hechizos.forEach((hechizo) => {
    $gridHechizos.innerHTML +=
    `<div class="cards-hechizos">
    <h2 class="titulo-card-hechizo">${hechizo.hechizo}</h2>
    <p class="numero-card-hechizo">#${hechizo.id}</p>
    <p class="contenido-card-hechizo">${hechizo.uso}</p>
    </div>
    `   
    });
//Filtrado de hechizos
$inputH.addEventListener("keyup", () => {
  const filtro = $inputH.value.toLowerCase();
  const hechizosFiltrados = hechizos.filter(hechizo => 
      hechizo.hechizo.toLowerCase().includes(filtro))
   
//Renderizado luego del filtro.
$gridHechizos.innerHTML = "";  

  hechizosFiltrados.forEach((hechizo) => {
    $gridHechizos.innerHTML +=
    `<div class="cards-hechizos">
    <h2 class="titulo-card-hechizo">${hechizo.hechizo}</h2>
    <p class="numero-card-hechizo">#${hechizo.id}</p>
    <p class="contenido-card-hechizo">${hechizo.uso}</p>
    </div>
    `     
    });
  }); 
});
	
 //Referencio mi boton para subir.
  const $subirHechizos = document.getElementById("subir-hechizos");  
  // Mostrar/ocultar botón al hacer scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 250) { // Mostrar el botón después de 300px de desplazamiento
      $subirHechizos.style.display = 'block';
  } else {
      $subirHechizos.style.display = 'none';
  }
});

// Volver al principio de la página al hacer clic en el botón
$subirHechizos.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
