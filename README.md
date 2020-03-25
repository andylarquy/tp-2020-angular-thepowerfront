# Programación con Herramientas Modernas

## Trabajo práctico 2020 -  Migrado a Angular

### Dominio general

¿Viajar? ¿A quién no le gusta? Claro que a nosotros si! Por eso, vamos a emprender una nueva app que llamaremos Aterrizar.

En primer lugar tenemos a los usuarios que tienen

* Nombre
* Apellido
* Edad
* Lista de amigos


Obviamente vamos a ofrecer vuelos que como datos tiene

* Ciudad de origen.
* Ciudad de destino.
* Aerolínea.
* fecha y hora de salida.
* Avión (Chmod 777, Airbondi A300, etc)
* Duración del viaje en horas.

También tenemos la posibilidad de ofrecer vuelos con escalas, que es un conjunto de vuelos para llegar a destino. Por ejemplo podemos volar Buenos Aires - Madrid, que está compuesto por un vuelo Buenos Aires - Frankfurt y Frankfurt - Madrid. La duración del viaje es la suma de los viajes que la componen más el tiempo entre vuelos.

A su vez, todos los tipos de vuelo tienen una serie de asientos disponibles de los cuales sabemos: 

* Número de asiento
* Si está de lado de la ventanilla
* Clase (que puede ser Economy, Business y First).

Para calcular el precio de los pasajes vamos a partir de un precio base del Vuelo que puede ser diferente para cada caso. Por ejemplo para un vuelo por la aerolínea Golhinio de Buenos Aires - Río de Janeiro sin escala es de $8.000 mientras que para la aerolínea BavariaFlight Buenos Aires - Frankfurt  sin escala es de $55.000. Si el vuelo es con escalas el precio base estipulado tiene un 10% de descuento. Luego se le suma el valor por asiento, que es puesto arbitrariamente por la aerolínea en cuestión, pero el precio tiene recargo del 15% si son los últimos dos pasajes disponibles. Para los vuelos con escalas el asiento es siempre el mismo.

## Entregables

### Interfaz de usuario

Se pide que construya la interfaz de usuario de los siguientes casos de uso:

1. Consultar vuelos disponibles para sacar pasajes
    1. Agregar un vuelo con un asiento seleccionado al carrito de compras.
    2. Finalizar la compra.

2. Consultar el perfil de usuario
    1. Agregar saldo a la cuenta
    2. Buscar amigos

A continuación se sugiere cómo podría ser la presentación de dicha interfaz, cualquier duda recomendamos conversarlo con el tutor del grupo asignado. La implementación podrá hacerla en la tecnología que quiera,

* Nuestra recomendación es que lo hagan en Arena JFace
* La decisión debe estar consensuada con todos los integrantes del grupo

## 1) Login
[![Selecci-n-027.png](https://i.postimg.cc/C53rcqkN/Selecci-n-027.png)](https://postimg.cc/gLKKJrMX)

## 2) Selección y búsqueda de vuelos
[![Selecci-n-028.png](https://i.postimg.cc/GmKwmXkn/Selecci-n-028.png)](https://postimg.cc/4YYF8bLW)

En este caso de uso se debe mostrar los datos de los vuelos en la grilla según el resultado de la búsqueda. Para todas las búsquedas de la aplicación tendremos como criterio que si el campo está vacío debe traernos todas las opciones posibles. En el caso de un vuelo con escalas debe aparecer una grilla con las mismas columnas, como se muestra en la imagen de arriba. 
En cuanto se seleccione cualquier vuelo de alguna de las grillas debe llenarse las alternativas de los asientos disponibles de la misma para que el usuario pueda seleccionar el lugar para viajar. Una vez seleccionada el vuelo y un asiento tenemos la posibilidad de agregar al carrito lo que el usuario tiene seleccionado.
La búsqueda puede realizarse sobre el nombre de la ciudad de origen, la de destino y un rango de fechas donde sale el vuelo. Las acciones posibles son limpiar los campos, finalizar la compra para pasar a la pantalla de confirmación o ir al panel de control.

## 3) Carrito de compras
[![Selecci-n-029.png](https://i.postimg.cc/5NwjnMM5/Selecci-n-029.png)](https://postimg.cc/tY4X4wJ7)

En esta pantalla podemos observar todas los pasajes seleccionados en el carrito y el total que suma la compra. Nos da la posibilidad de eliminar el ítem seleccionado en la grilla, vaciar el carrito completamente, confirmar la compra o bien volver a la pantalla anterior para seguir comprando.

## 4) Perfil de usuario

[![Selecci-n-030.png](https://i.postimg.cc/FKS6JGSK/Selecci-n-030.png)](https://postimg.cc/7Cx9F3mv)

En esta pantalla podemos ver el perfil del usuario mostrando el nombre y apellido, su password actual, su edad y su saldo disponible. Las acciones que podemos realizar es modificar el password, la edad del usuario y cargar saldo. También serán mostrados en dos grillas los amigos y los pasajes que ha comprado. Las acciones posibles son agregar amigos, aceptar las modificaciones o volver a la pantalla anterior.

## Persistencia a memoria
La aplicación deberá implementar la persistencia mediante un componente de acceso a datos (Repositorio) que trabaje contra una colección en memoria. 

### Responsabilidad grupal
* Definición del modelo de objetos
* Definición de los componentes de acceso a datos
* Definición del script inicial de datos con las iguiente información:
    * Al menos 8 vuelos y 1 con escala
    * Al menos 3 asientos para cada vuelo.
    * Usuarios al menos 5.
    * Pasajes al menos 2 por usuario.

#### Integrantes:

* Sebastian De Vita

* Nicolas Chiozza

* Andrés Suárez
