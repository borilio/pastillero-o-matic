/**
 * PRESCRIPCION-PLANTILLA.TS
 * 
 * Archivo de referencia con la estructura básica para crear una nueva prescripción.
 * 
 * CÓMO USAR ESTA PLANTILLA:
 * 1. Copia el contenido de este archivo
 * 2. Pégalo en prescripcion.ts
 * 3. Rellena los datos del nuevo paciente
 * 4. Consulta el README.md para más detalles sobre cada campo
 */

import { Prescripcion } from "./prescipcion.model";

export const PRESCRIPCION: Prescripcion = {
  
  // ========== INFORMACIÓN DEL PACIENTE ==========
  paciente: "Nombre Completo del Paciente",
  ultimaActualizacion: "2026-01-29",
  
  
  // ========== MENSAJE/AVISO ==========
  // Se muestra un banner en la app si mostrar: true
  mensaje: {
    mostrar: false,
    titulo: "Título del Aviso",
    texto: "Contenido o descripción del aviso que se mostrará en la aplicación.",
    tipo: "info", // "info" | "warning" | "danger"
    fechaDesde: "",   // Dejar vacío para mostrar siempre, o usar formato YYYY-MM-DD
    fechaHasta: "",   // Dejar vacío para mostrar siempre, o usar formato YYYY-MM-DD
  },
  
  
  // ========== TOMAS DEL DÍA ==========
  // Array con cada toma (Desayuno, Almuerzo, Merienda, Cena, Noche, Dormir, etc.)
  tomas: [
    
    // --------- TOMA #1: DESAYUNO ---------
    {
      momento: "Desayuno",
      hora: "09:00",
      color: "#c6e5fc",           // Azul claro
      icono: "bi bi-brightness-alt-high-fill", // Ícono de Bootstrap Icons
      pastillas: [
        
        {
          nombre: "Nombre del Medicamento",
          principioActivo: "Nombre del Principio Activo",
          dosis: "20mg",
          cantidad: "1 cápsula",   // ej: "1 pastilla", "1/2 pastilla", "2 cápsulas", etc.
          importancia: "media",     // "baja" | "media" | "alta"
          motivo: "Para qué sirve este medicamento",
          fotoCaja: "nombre-archivo.png",    // Foto en public/photos/
          fotoPastilla: "nombre-archivo.png", // Foto en public/photos/
          observaciones: "Instrucciones especiales (ej: Tomar en ayunas, Mejor con comida, etc.)",
        },
        
        // Puedes añadir más medicamentos aquí...
        
      ]
    },
    
    
    // --------- TOMA #2: COMIDA/ALMUERZO ---------
    {
      momento: "Comida",
      hora: "14:00",
      color: "#f4e88c",           // Amarillo claro
      icono: "bi bi-fork-knife",
      pastillas: []               // Array vacío si no hay medicamentos en esta toma
    },
    
    
    // --------- TOMA #3: TARDE ---------
    {
      momento: "Tarde",
      hora: "16:00",
      color: "#f2a217",           // Naranja
      icono: "bi bi-sun-fill",
      pastillas: [
        
        // Añade medicamentos de la tarde aquí...
        
      ]
    },
    
    
    // --------- TOMA #4: NOCHE ---------
    {
      momento: "Noche",
      hora: "21:00",
      color: "#dea0e8",           // Púrpura claro
      icono: "bi bi-moon-fill",
      pastillas: [
        
        // Añade medicamentos de la noche aquí...
        
      ]
    },
    
    
    // --------- TOMA #5: DORMIR ---------
    {
      momento: "Dormir",
      hora: "23:00",
      color: "#6c5af0",           // Púrpura oscuro
      icono: "bi bi-stars",
      pastillas: [
        
        // Añade medicamentos para dormir aquí...
        
      ]
    },
    
    
    // Puedes añadir más tomas según sea necesario...
    
  ]
};
