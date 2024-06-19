# UTN_FullStack-Harry-Potter

Segundo trabajo práctico de la diplomatura Full Stack. En este caso se trata de una web de Harry Potter con HTML, CSS y JavaScript.

## Descripción

Este proyecto consiste en una aplicación web sobre Harry Potter que utiliza una API pública para obtener y mostrar contenido dinámico de personajes y hechizos. Se respetó la estructura HTML de la plantilla entregada y todo el contenido fue agregado dinámicamente usando JavaScript. Además, se incorporó un buscador de personajes y otro de hechizos ambos por nombre.

## Contenido del Repositorio

### Archivos Principales

1. `index.html`
    - Pagina principal que contiene los enlaces a las paginas de personajes, hechizos y casas.

2. `styles`
    - Carpeta de estilos que define la apariencia y el diseño de la página, incluyendo las tarjetas de personajes y hechizos.Cada pagina tiene su hoja de estilos en cascada individual.

3. `scripts`
    - Carpeta de archivos JavaScript que maneja la lógica de la aplicación, incluyendo la obtención de datos de la API, el filtrado y la renderización de personajes y hechizos.
    Cada pagina cuenta con su archivo individual JS.

### Estructura del Proyecto

- **HTML**: Define la estructura de la página web.
- **CSS**: Aplica estilos y diseño a los elementos de la página.
- **JavaScript**: Contiene la lógica para interactuar con la API y actualizar dinámicamente el contenido de la página.

## Funcionalidades

1. **Búsqueda de Personajes**
    - Obtención y visualización de una lista de personajes de Harry Potter desde la API.
    - Filtrado de personajes por nombre utilizando un campo de búsqueda.
    - Visualización de detalles de cada personaje, como nombre, imagen, casa, ascendencia y si es mago.

2. **Búsqueda de Hechizos**
    - Obtención y visualización de una lista de hechizos de Harry Potter desde la API.
    - Filtrado de hechizos por nombre utilizando un campo de búsqueda.
    - Visualización de detalles de cada hechizo, como nombre del hechizo, ID y uso.

3. **Botón de Volver al Principio**
    - Botón que aparece al hacer scroll hacia abajo y permite volver al principio de la página con un solo clic.

## API Utilizada

- **Harry Potter API**: [https://harry-potter-api.onrender.com](https://harry-potter-api.onrender.com)
                      : ["https://hp-api.onrender.com/api/characters"]("https://hp-api.onrender.com/api/characters")
    - Endpoints utilizados:
        - `/api/characters` para obtener la lista de personajes.
        - `/hechizos` para obtener la lista de hechizos.

## Instrucciones de Uso

1. Clonar el repositorio:
    ```sh
    git clone https://github.com/Miguel01Pacheco/UTN_FullStack-Harry-Potter.git
    ```

2. Abrir el archivo `index.html` en un navegador web.

3. Utilizar los campos de búsqueda para filtrar personajes y hechizos en tiempo real.

## Notas

- Es necesario tener una conexión a internet activa para obtener los datos de la API.
- Los datos de los personajes y hechizos pueden estar sujetos a cambios, ya que son proporcionados por la API de Harry Potter.

## Autor

- [Miguel Pacheco](https://github.com/Miguel01Pacheco)
