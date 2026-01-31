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
  ultimaActualizacion: "2026-01-28",
  mensaje: {
    mostrar: false,
    titulo: "En pruebas",
    texto: "Este aviso se mostrará durante la fase de pruebas. Aquí podrás ver un aviso queramos mostrar en la app.",
    tipo: "info", // "danger" o "warning"
    fechaDesde: "",
    fechaHasta: "",
  },
  tomas: [
    {
      momento: "Desayuno",
      hora: "09:00",
      color: "#c6e5fc",
      icono: "bi bi-brightness-alt-high-fill",
      pastillas: [
        { 
          nombre: "Omeprazol",
          principioActivo: "Omeprazol", 
          dosis: "20mg", 
          cantidad: "1 cápsula",
          importancia: "media",
          motivo: "Protector de estómago",
          fotoCaja: "omeprazol-caja.png",
          fotoPastilla: "omeprazol-capsula.png",
          observaciones: "Tomar mejor en ayunas, 30 min antes de desayunar",
        },
        { 
          nombre: "Coropres",
          principioActivo: "Carvedilol", 
          dosis: "6.25mg", 
          cantidad: "1 pastilla",
          importancia: "alta",
          motivo: "Tensión y corazón",
          fotoCaja: "carvedilol-caja.png",
          fotoPastilla: "",
          observaciones: "No olvidar ninguna toma",
        },
        {
          nombre: "Metformina",
          principioActivo: "Metformina", 
          dosis: "825mg", 
          cantidad: "1/2 pastilla",
          importancia: "media",
          motivo: "Control de azúcar (Diabetes)",
          fotoCaja: "metformina-caja.png",
          fotoPastilla: "metformina-pastilla.png",
          observaciones: "Tomar durante el desayuno", 
        },
        {
          nombre: "Micardis",
          principioActivo: "Telmisartán", 
          dosis: "80mg", 
          cantidad: "1 pastilla",
          importancia: "alta",
          motivo: "Tensión",
          fotoCaja: "micardis-caja.png",
          fotoPastilla: "micardis-pastilla.png",
          observaciones: "", 
        },
        {
          nombre: "Duloxetina",
          principioActivo: "Duloxetina", 
          dosis: "60mg", 
          cantidad: "1 cápsula",
          importancia: "alta",
          motivo: "Estado de ánimo / Dolor crónico",
          fotoCaja: "duloxetina-caja.png",
          fotoPastilla: "duloxetina-capsula.png",
          observaciones: "", 
        }
      ]
    },
    {
      momento: "Comida",
      hora: "15:00",
      color: "#f4e88c",
      icono: "bi bi-fork-knife",
      pastillas: [
          {
          nombre: "Memoria Farline",
          principioActivo: "Omega 3", 
          dosis: "250mg", 
          cantidad: "2 cápsulas blanda",
          importancia: "baja",
          motivo: "Suplemento memoria",
          fotoCaja: "memoria-caja.png",
          fotoPastilla: "memoria-pastilla.png",
          observaciones: "Tomar las dos cápsulas juntas con los comida", 
        }
      ]
    },
    {
      momento: "Tarde",
      hora: "16:00",
      color: "#f2a217",
      icono: "bi bi-sun-fill",
      pastillas: [
        { 
          nombre: "Lexatin",
          principioActivo: "Bromazepam", 
          dosis: "1.5mg", 
          cantidad: "1 cápsula",
          importancia: "media",
          motivo: "Relajante / Ansiedad",
          fotoCaja: "lexatin-caja.png",
          fotoPastilla: "lexatin-capsula.png",
          observaciones: "En excepciones, puede tomar una cápsula extra a lo largo del día",
        },
        { 
          nombre: "Adiro",
          principioActivo: "Ácido acetilsalicílico", 
          dosis: "100mg", 
          cantidad: "1 pastilla",
          importancia: "alta",
          motivo: "Circulación / Antigregante",
          fotoCaja: "adiro-caja.png",
          fotoPastilla: "adiro-pastilla.png",
          observaciones: "Hace que la sangre esté más líquida y evita coágulos que podrían atascar los stents.",
        }
      ] 
    },
    {
      momento: "Noche",
      hora: "21:00",
      color: "#dea0e8",
      icono: "bi bi-moon-fill",
      pastillas: [
        { 
          nombre: "Coropres",
          principioActivo: "Carvedilol", 
          dosis: "6.25mg", 
          cantidad: "1 pastilla",
          importancia: "alta",
          motivo: "Tensión y corazón",
          fotoCaja: "carvedilol-caja.png",
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
          fotoCaja: "atorvastatina-caja.png",
          fotoPastilla: "atorvastatina-pastilla.png",
          observaciones: "", 
        },
        {
          nombre: "Metformina",
          principioActivo: "Metformina", 
          dosis: "825mg", 
          cantidad: "1/2 pastilla",
          importancia: "media",
          motivo: "Control de azúcar (Diabetes)",
          fotoCaja: "metformina-caja.png",
          fotoPastilla: "metformina-pastilla.png",
          observaciones: "Tomar con la cena", 
        }
      ]
    },
    {
      momento: "Dormir",
      hora: "23:00",
      color: "#6c5af0",
      icono: "bi bi-stars",
      pastillas: [
        { 
          nombre: "Quetiapina",
          principioActivo: "Quetiapina", 
          dosis: "25mg", 
          cantidad: "1 pastilla",
          importancia: "alta",
          motivo: "Dormir / Alucinaciones",
          fotoCaja: "quetiapina-caja.png",
          fotoPastilla: "quetiapina-pastilla.png",
          observaciones: "Tomar justo antes de ir a la cama",
        }
      ]
    }
  ]
};
