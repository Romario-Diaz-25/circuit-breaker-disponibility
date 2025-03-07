// import CircuitBreaker from "opossum";
// import { CarService } from "../services/excecutor.service";
// import { ICreateCar } from "../interfaces/executor.interface";

// const options = {
//   timeout: 3000, // 3 segundos de espera maxima
//   errorThresholdPercentage: 50, // Si mas del 50% de las peticiones fallan, se abre el circuito
//   resetTimeout: 5000, // 5 segundos antes de intentar cerrar el circuito nuevamente
// };

// const createCarBreaker = new CircuitBreaker(CarService.createCar, options);

// // Fallback en caso de fallo
// createCarBreaker.fallback((carDTO: ICreateCar) => {
//   return {
//     error:
//       "Servicio no disponible para crear un carro. Intente nuevamente mas tarde.",
//     carDTO,
//   };
// });

// // Eventos para monitorear el estado del breaker (optional)
// createCarBreaker.on("open", () => console.log("Circuito abierto"));

// createCarBreaker.on("halfOpen", () =>
//   console.log("Circuito medio abierto: reintentando...")
// );

// createCarBreaker.on("close", () =>
//   console.log("Circuito cerrado: Servicio Recuperado")
// );

// export default createCarBreaker;
