/**
 * Archivo con la prescripción del paciente. 

Ejemplo de momento

{
    momento: "Tarde",
    hora: "14:00",
    color: "#f1dcbb", // Naranja clarito
    icono: "bi bi-sun",
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
    mostrar: false,
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
      color: "#c6e5fc",
      icono: "bi bi-sunrise-fill",
      pastillas: [
        { 
          nombre: "Omeprazol",
          principioActivo: "Omeprazol", 
          dosis: "20mg", 
          cantidad: "1 cápsula",
          importancia: "media",
          motivo: "Protector de estómago",
          fotoCaja: "",
          fotoPastilla: "",
          observaciones: "Tomar mejor en ayunas, 30 min antes de desayunar",
        },
        { 
          nombre: "Coropres",
          principioActivo: "Carvedilol", 
          dosis: "6,25mg", 
          cantidad: "1 pastilla",
          importancia: "alta",
          motivo: "Tensión y corazón",
          fotoCaja: "",
          fotoPastilla: "",
          observaciones: "No olvidar ninguna toma",
        },
        {
          nombre: "Memoria Farline",
          principioActivo: "Omega 3", 
          dosis: "", 
          cantidad: "1 cápsula blanda",
          importancia: "baja",
          motivo: "Suplemento memoria",
          fotoCaja: "",
          fotoPastilla: "",
          observaciones: "", 
        },
        {
          nombre: "Metformina",
          principioActivo: "Metformina", 
          dosis: "825mg", 
          cantidad: "1/2 pastilla",
          importancia: "media",
          motivo: "Control de azúcar (Diabetes)",
          fotoCaja: "",
          fotoPastilla: "",
          observaciones: "Tomar durante el desayuno", 
        },
        {
          nombre: "Micardis",
          principioActivo: "Telmisartán", 
          dosis: "80mg", 
          cantidad: "1 pastilla",
          importancia: "alta",
          motivo: "Tensión",
          fotoCaja: "",
          fotoPastilla: "",
          observaciones: "", 
        },
        {
          nombre: "Duloxetina",
          principioActivo: "Duloxetina", 
          dosis: "60mg", 
          cantidad: "1 cápsula",
          importancia: "alta",
          motivo: "Estado de ánimo / Dolor crónico",
          fotoCaja: "",
          fotoPastilla: "",
          observaciones: "", 
        }
      ]
    },
    {
      momento: "Comida",
      hora: "14:00",
      color: "#f4e88c",
      icono: "bi bi-fork-knife",
      pastillas: []
    },
    {
      momento: "Tarde",
      hora: "16:00",
      color: "#e7bf7f",
      icono: "bi bi-sun-fill",
      pastillas: [
        { 
          nombre: "Lexatin",
          principioActivo: "Bromazepam", 
          dosis: "1.5mg", 
          cantidad: "1 cápsula",
          importancia: "media",
          motivo: "Relajante / Ansiedad",
          fotoCaja: "",
          fotoPastilla: "",
          observaciones: "En excepciones, puede tomar una cápsula extra a lo largo del día",
        },
        { 
          nombre: "Adiro",
          principioActivo: "Ácido acetilsalicílico", 
          dosis: "100mg", 
          cantidad: "1 pastilla",
          importancia: "alta",
          motivo: "Circulación / Antigregante",
          fotoCaja: "",
          fotoPastilla: "",
          observaciones: "Protección cardiovascular",
        }
      ] 
    },
    {
      momento: "Noche",
      hora: "21:00",
      color: "#f2d1f7",
      icono: "bi bi-moon-fill",
      pastillas: [
        { 
          nombre: "Coropres",
          principioActivo: "Carvedilol", 
          dosis: "6,25mg", 
          cantidad: "1 pastilla",
          importancia: "alta",
          motivo: "Tensión y corazón",
          fotoCaja: "",
          fotoPastilla: "",
          observaciones: "",
        },
        {
          nombre: "Memoria Farline",
          principioActivo: "Omega 3", 
          dosis: "", 
          cantidad: "1 cápsula blanda",
          importancia: "baja",
          motivo: "Suplemento memoria",
          fotoCaja: "",
          fotoPastilla: "",
          observaciones: "", 
        },
        {
          nombre: "Atorvastatina",
          principioActivo: "Atorvastatina", 
          dosis: "80mg", 
          cantidad: "1 pastilla",
          importancia: "baja",
          motivo: "Colesterol",
          fotoCaja: "",
          fotoPastilla: "",
          observaciones: "", 
        },
        {
          nombre: "Metformina",
          principioActivo: "Metformina", 
          dosis: "825mg", 
          cantidad: "1/2 pastilla",
          importancia: "media",
          motivo: "Control de azúcar (Diabetes)",
          fotoCaja: "",
          fotoPastilla: "",
          observaciones: "Tomar con la cena", 
        }
      ]
    },
    {
      momento: "Dormir",
      hora: "23:00",
      color: "#9284f7",
      icono: "bi bi-stars",
      pastillas: [
        { 
          nombre: "Quetiapina",
          principioActivo: "Quetiapina", 
          dosis: "25mg", 
          cantidad: "1 pastilla",
          importancia: "alta",
          motivo: "Dormir / Alucinaciones",
          fotoCaja: "",
          fotoPastilla: "",
          observaciones: "Tomar justo antes de ir a la cama",
        }
      ]
    }
  ]
};