# =================================
# Master Continuo - Laboratorio - Módulo 6 - REST API

Laboratorio REST API
Introducción
Vamos a consumir una API pública para mostrar datos de la serie Rick & Morty

https://rickandmortyapi.com/

Para simular escrituras vamos a utilizar un servidor local json-server

json-server .- https://github.com/typicode/json-server

Cómo punto de entrada vamos a partir del Boilerplate:

00-boilerplate .- https://github.com/Lemoncode/master-frontend-lemoncode/tree/master/06-rest-api/01-concepts/00-boilerplate

Tendrás que:

Cambiar las escenas, rutas y pods a character-collection y character
Actualizar el json-server
Ejercicio 1
Crear un proyecto en el que vamos a obtener una lista de actores de la API Rest de Rick & Morty, utilizando Axios o Fetch)
REST docs .- https://rickandmortyapi.com/documentation/#rest

Pinchando en un character vamos a mostrar el detalle del mismo (segunda llamada a la API Rest).
Ejercicio 2
Montamos un json-server local.
json-server .- https://github.com/typicode/json-server

Vamos añadir una colección en la que se puede añadir un comentario de un actor.

Cuando visualicemos la ventana de detalle del actor intentaremos recuperar el comentario para dicho actor (GET - si no existe lo pondremos en blanco).

El usuario puede editar y guardar el comentario

Opcional
Implementar la misma aplicación pero tirando de la API Rest de GraphQL
GraphQL Docs .- https://rickandmortyapi.com/documentation/#graphql

GraphQL Playground .-https://rickandmortyapi.com/graphql/

Challenge
Implementar paginación.
Implementar busqueda de actores.
Cargar un cuadro de mandos, cargamos en paralelo:
Actores.
Lugares.
Episodios.
Mostrar la ficha de los actores que participan en un episodio.
