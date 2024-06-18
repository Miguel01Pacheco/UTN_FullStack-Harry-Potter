//Referencio el div de mi HTML necesario para agregar mi contenido dinámico.
const $grid = document.querySelector(".grid");
//Funcion para poner "Si" en caso de true o "No"en caso de false.
function esMago(valor){
    if(valor){
        return "Es mago";
    }else{
        return "No es mago";
    }
}
//Funcion para reemplazar la imagen vacia por una por defecto.
function imageOk(valor,valor2){
    if(valor ==="" && valor2 ==="male"){
        return "../assets/hombreDefault.jpeg";
    }else if (valor ==="" && valor2 ==="female"){
        return "../assets/mujerDefault.jpeg";
    }else if (valor ==="" && valor2 ===""){
      return "../assets/genericaDefault.jpeg"
    }

        return valor;
    
}
//Funcion para cambiar de clase segun la casa del personaje.
function house(valor){
  if(valor ==="Gryffindor"){
    return "Gryffindor";
  }else if (valor === "Slytherin"){
    return "Slytherin";
  }else if (valor === "Ravenclaw"){
    return  "Ravenclaw";
  }else if (valor === "Hufflepuff"){
    return "Hufflepuff";
  }
  return valor;
}
//Funcion para detectar si el personaje tiene ancestros.Si el campo esta vacio no se muestra.
function ancestry(valor){
    if (valor ==="half-blood"){
        return "Half-Blood";
    }else if (valor === "pure-blood"){
        return "Pure-Blood";
    }else if (valor === "muggle"){
        return "Muggle";
    }else if(valor ==="muggleborn"){
        return "MuggleBorn";
    }else if (valor==="quib"){
        return "Quib";
    }
    return "";
}
//Mediante un fecth obtengo los datos desde la API de Harry Pother.
fetch("https://hp-api.onrender.com/api/characters")
  .then((respuesta) => {
    return respuesta.json();
  })
  .then((data) => {
    let personajes = data;
    console.log(personajes);    
//Bucle para filtrar los personajes que no tienen imagen
/*Decidí no usarla pero la dejo para ilustrar.
   personajes = personajes.filter((personaje)=>
{
    if (personaje.image !=="")
        return personaje;
})
*/
//Array para guardar el contenido html.
let contenidoHtml =[];        
//Bucle para iterar mi array de personajes
    personajes.forEach((personaje) => {
      contenidoHtml +=
     `<div class= "card">
      <h1 class="titulo">${personaje.name}</h1>
      <img  class="image" src="${imageOk(personaje.image,personaje.gender)}" alt="imagen de ${personaje.name}">
      <p class = "${house(personaje.house)}" > ${house(personaje.house)}</p>
      <p  class =${ancestry(personaje.ancestry)}>${ancestry(personaje.ancestry)}</p>
      <p class ="wizard">${esMago(personaje.wizard)}</p>
      </div>
      `;
    });
//Muestro en pantalla las cartas
$grid.innerHTML = contenidoHtml;   
  });
  //Referencio mi boton para subir.
const $backToTopButton = document.getElementById("back-to-top");  
  // Mostrar/ocultar botón al hacer scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 250) { // Mostrar el botón después de 300px de desplazamiento
      $backToTopButton.style.display = 'block';
  } else {
      $backToTopButton.style.display = 'none';
  }
});

// Volver al principio de la página al hacer clic en el botón
$backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});