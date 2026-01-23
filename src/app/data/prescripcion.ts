/**
 * Archivo con la prescripción del paciente. 

Ejemplo de momento

{
    momento: "Tarde",
    hora: "14:00",
    color: "#f1dcbb", // Naranja clarito
    pastillas: [] 
}

Ejemplo de pastilla

{ 
    nombre: "Omeprazol",
    principioActivo: "Omeprazol", 
    dosis: "20mg", 
    cantidad: "1 cápsula",
    importancia: "media",
    motivo: "Protector estómago",
    fotoCaja: "assets/photos/omeprazol-caja.jpg",
    fotoPastilla: "assets/photos/omeprazol-pastilla.jpg",
    observaciones: "Mejor en ayunas",
}

*/


import { Prescripcion } from "./prescipcion.model";

export const PRESCRIPCION: Prescripcion = {
  paciente: "Señora Dolores",
  ultimaActualizacion: "2026-01-23",
  mensaje: {
    mostrar: true,
    titulo: "Aviso",
    texto: "Esto es un mensaje de prueba",
    tipo: "info", // "danger" o "warning"
    fechaDesde: "",
    fechaHasta: "",
  },
  tomas: [
    {
      momento: "Desayuno",
      hora: "09:00",
      color: "#c6e5fc", // Azul clarito
      pastillas: [
        { 
          nombre: "Omeprazol",
          principioActivo: "Omeprazol", 
          dosis: "20mg", 
          cantidad: "1 cápsula",
          importancia: "media",
          motivo: "Protector estómago",
          fotoCaja: "assets/photos/omeprazol-caja.jpg",
          fotoPastilla: "assets/photos/omeprazol-pastilla.jpg",
          observaciones: "Mejor en ayunas",
        },
        { 
          nombre: "Coropres",
          principioActivo: "Carvedilol", 
          dosis: "6.25mg", 
          cantidad: "1 pastilla",
          importancia: "alta",
          motivo: "Protector estómago",
          fotoCaja: "",
          fotoPastilla: "",
          observaciones: "Esta no puede faltar",
        },
        {
          nombre: "Memory",
          principioActivo: "Omega 3", 
          dosis: "", 
          cantidad: "1 pastilla blanda",
          importancia: "baja",
          motivo: "Mejorar la memoria",
          fotoCaja: "assets/photos/omeprazol-caja.jpg",
          fotoPastilla: "assets/photos/omeprazol-pastilla.jpg",
          observaciones: "Mejor en ayunas", 
        }

      ]
    },
    {
      momento: "Comida",
      hora: "14:00",
      color: "#efe9bf", // Amarillo clarito
      pastillas: [
        { 
          nombre: "Coropres",
          principioActivo: "Carvedilol", 
          dosis: "6.25mg", 
          cantidad: "1 pastilla",
          importancia: "baja",
          motivo: "Protector estómago",
          fotoCaja: "",
          fotoPastilla: "",
          observaciones: "Esta no puede faltar",
        }
      ]
    },
    {
      momento: "Tarde",
      hora: "16:00",
      color: "#f1dcbb", // Naranja clarito
      pastillas: [
        { 
          nombre: "Coropres",
          principioActivo: "Carvedilol", 
          dosis: "6.25mg", 
          cantidad: "1 pastilla",
          importancia: "alta",
          motivo: "Protector estómago",
          fotoCaja: "",
          fotoPastilla: "",
          observaciones: "Esta no puede faltar",
        }
      ] 
    },
    {
      momento: "Cena",
      hora: "21:00",
      color: "#f2d1f7", // Morado clarito
      pastillas: [
        { 
          nombre: "Coropres",
          principioActivo: "Carvedilol", 
          dosis: "6.25mg", 
          cantidad: "1 pastilla",
          importancia: "alta",
          motivo: "Protector estómago",
          fotoCaja: "",
          fotoPastilla: "",
          observaciones: "Esta no puede faltar",
        }
      ]
    }
  ]
};