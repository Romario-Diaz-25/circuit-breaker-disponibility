# circuit-breaker-example

### Descripcion de la prueba

- Se ha creado un pequeño servidor que consume un endpoint que puede obtener registros de carros, este endpoint, tiene un 50% de probabilidad de fallar y esta envuelto con
  nuestro circuito, el cual va a controlar cada cuanto falla el endpoint para cerrar o abrir el circuito.

### Objetivos de la prueba

- El objetivo de la prueba es que cuando nuestro endpoint que sirve datos de carros falle mas de la cuenta (obtenga mas de un 50% de tasa de error)
  entonces el sistema automaticamente cierre el circuito y mande una respuesta por defecto (en este caso un arreglo vacio)

### Pasos implementados para llevar a cabo la prueba

- Levantamiento de servidor
- Instalar dependencias
- Creacion de endpoint
- Implementacion de circuit breaker
- Envolver endpoint externo con circuit breaker

### Tecnologias usadas en la prueba
- Typescript
- node.js
- opposum

### Resultados

- Las peticiones al endpoint externo son mas controlados, cada que el endpoint falla por encima del limite permitido de fallo
  el circuito se cierra y no genera un error en cascada.

### Conclusiones: 

- El uso de circuit breaker va a permitir controlar de cierta manera aquello que no podemos controlar, por ejemplo
  cuanto nos toca depender de un servicio externo, y no sabemos si este puede fallar o no
  circuit breaker es una gran ayuda para ayudarnos a controlar esa clase de fallos, simplemente
  cerrando el circuito y abriendolo hasta que las peticiones mejoren.
