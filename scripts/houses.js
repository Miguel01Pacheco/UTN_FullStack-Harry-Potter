const $contCasas =document.getElementById("grid-casas");
//Array con los objetos casas.
const casas =[
    {
     titulo :"Gryffindor",
     clase1 : "img-G",
     imagen :"../assets/gryffindor-sin-fondo.png",
     clase2 : "p-G",
     descripcion :"Gryffindor es una de las cuatro casas del Colegio Hogwarts de Magia y Hechicería. Fundada por Godric Gryffindor, es conocida por valorar la valentía, el coraje y la determinación. Sus miembros son reconocidos por su audacia y nobleza. La sala común de Gryffindor está ubicada en una torre alta y es accesible a través de un retrato encantado."
    },
    {
     titulo :"Slytherin",
     clase1 : "img-S",
     imagen :"../assets/slytherin-sin-fondo.png",
     clase2 : "p-S",
     descripcion :"Slytherin es una de las cuatro casas del Colegio Hogwarts de Magia y Hechicería. Fundada por Salazar Slytherin, se distingue por su astucia, ambición y determinación. Sus miembros son conocidos por su habilidad para liderar y su deseo de alcanzar grandes metas. La sala común de Slytherin está situada en las mazmorras, debajo del lago, y tiene un ambiente oscuro y misterioso."
    },
    { 
     titulo :"Ravenclaw",
     clase1 : "img-R",
     imagen :"../assets/ravenclaw-sin-fondo.png",
     clase2 : "p-R",
     descripcion :"Ravenclaw es una de las cuatro casas del Colegio Hogwarts de Magia y Hechicería. Fundada por Rowena Ravenclaw, valora la inteligencia, la sabiduría y la creatividad. Sus miembros son reconocidos por su amor al aprendizaje y su ingenio. La sala común de Ravenclaw está ubicada en una torre alta y se accede respondiendo a un enigma, reflejando su aprecio por el pensamiento crítico y la curiosidad."
    },
    {
     titulo :"Hufflepuff",
     clase1 : "img-H",
     imagen :"../assets/hufflepuff-sin-fondo.png",
     clase2 : "p-H",
     descripcion :"Hufflepuff es una de las cuatro casas del Colegio Hogwarts de Magia y Hechicería. Fundada por Helga Hufflepuff, valora la lealtad, la paciencia y el trabajo duro. Sus miembros son conocidos por su amabilidad y justicia. La sala común de Hufflepuff está situada cerca de las cocinas de Hogwarts, proporcionando un ambiente acogedor y cálido que refleja la naturaleza inclusiva y amistosa de la casa.",

    },
]
//Funcion para la estructura de mis cartas.
function renderizar(titulo,imagen, descripcion ,clase1,clase2){
    return ` <div class=div-${titulo}>
             <h1>${titulo}</h1>
             <img src="${imagen}" class="${clase1}">
             <p class="${clase2}" >${descripcion}</p>
             </div>`
}
//Renderizo el contenido en el Html.
casas.forEach(casa =>{
    $contCasas.innerHTML += renderizar(casa.titulo,casa.imagen,casa.descripcion,casa.clase1,casa.clase2);
});
	
 //Referencio mi boton para subir.
 const $subirCasas = document.getElementById("subir-casas");  
 // Mostrar/ocultar botón al hacer scroll
window.addEventListener('scroll', () => {
 if (window.scrollY > 300) { // Mostrar el botón después de 300px de desplazamiento
     $subirCasas.style.display = 'block';
 } else {
     $subirCasas.style.display = 'none';
 }
});

// Volver al principio de la página al hacer clic en el botón
$subirCasas.addEventListener('click', () => {
 window.scrollTo({ top: 0, behavior: 'smooth' });
});




