# Pastillero-O-Matic

## Descripción de la Aplicación

**Pastillero-O-Matic** es una aplicación web diseñada para ayudar a gestionar y visualizar de manera clara y organizada el horario de medicamentos. La aplicación muestra las diferentes tomas del día (Desayuno, Almuerzo, Merienda, Cena, etc.) con todos los medicamentos que deben tomarse en cada momento, incluyendo información importante como dosis, observaciones y fotografías de las cajas y pastillas.

La interfaz es intuitiva y fácil de usar, permitiendo:

- Ver todas las tomas del día de un vistazo
- Acceder a detalles de cada medicamento (dosis, motivo, observaciones)
- Visualizar fotos de las cajas de medicamentos para identificarlos fácilmente
- Recibir avisos importantes sobre cambios en la prescripción

## URL Desplegada en Netlify

Este repositorio de GitHub está enlazado con Netlify. Cada cambio compilará y desplegará la aplicación de forma automática en el siguiente enlace:

https://pastillero-o-matic.netlify.app/

---

## Manual: Cómo editar el archivo `prescripcion.ts`

El archivo `prescripcion.ts` (ubicado en `src/app/data/prescripcion.ts`) contiene **toda la información sobre los medicamentos y sus horarios**. Aquí te explicamos cómo modificarlo.

### Estructura General del Archivo

El archivo está compuesto por un objeto principal llamado `PRESCRIPCION` que contiene:

```
PRESCRIPCION
├── paciente (nombre del paciente)
├── ultimaActualizacion (fecha de la última actualización)
├── mensaje (avisos que se muestran en la app)
└── tomas (array con cada toma del día)
    └── cada toma contiene:
        ├── momento (nombre de la toma: Desayuno, Almuerzo, etc.)
        ├── hora (hora de la toma)
        ├── color (color que se muestra en la app)
        ├── icono (icono que representa la toma)
        └── pastillas (array con cada medicamento)
            └── cada pastilla contiene propiedades como nombre, dosis, etc.
```

### Atributos Principales

#### 1. **Información del Paciente**

```javascript
paciente: "Nombre del Paciente"           // Nombre de quién toma los medicamentos
ultimaActualizacion: "YYYY-MM-DD"         // Fecha en formato año-mes-día (ej: 2026-01-28)
```

#### 2. **Mensaje (Avisos)**

```javascript
mensaje: {
  mostrar: true/false,                    // Mostrar u ocultar el aviso
  titulo: "Título del aviso",            // Título que aparece en la app
  texto: "Contenido del aviso",          // Descripción o contenido del aviso
  tipo: "info",                          // Tipo: "info", "warning" o "danger"
  fechaDesde: "YYYY-MM-DD",              // Fecha de inicio (vacío si se muestra siempre)
  fechaHasta: "YYYY-MM-DD",              // Fecha de fin (vacío si se muestra siempre)
}
```

**Ejemplos de tipos:**
- `"info"` → Aviso informativo (azul)
- `"warning"` → Aviso de precaución (amarillo)
- `"danger"` → Aviso importante (rojo)

#### 3. **Tomas (Horarios de Medicamentos)**

Cada toma del día se define con estos atributos:

```javascript
{
  momento: "Desayuno",                   // Nombre de la toma (Desayuno, Almuerzo, Merienda, Cena, etc.)
  hora: "09:00",                         // Hora en formato HH:MM (24 horas)
  color: "#c6e5fc",                      // Color en formato hexadecimal (ej: azul claro)
  icono: "bi bi-brightness-alt-high-fill", // Ícono de Bootstrap Icons
  pastillas: [...]                       // Array con los medicamentos de esta toma
}
```

#### 4. **Pastillas (Medicamentos)**

Cada medicamento en una toma se define con estos atributos:

```javascript
{
  nombre: "Nombre del medicamento",      // Nombre comercial del medicamento
  principioActivo: "Principio activo",   // Nombre del componente activo
  dosis: "20mg",                         // Cantidad del medicamento
  cantidad: "1 cápsula",                 // Unidad a tomar (1 pastilla, 1/2 pastilla, etc.)
  importancia: "media",                  // Nivel: "baja", "media" o "alta"
  motivo: "Para qué sirve",              // Breve explicación del motivo de tomar este medicamento
  fotoCaja: "nombre-archivo.png",        // Foto de la caja (ubicar en public/photos/)
  fotoPastilla: "nombre-archivo.png",    // Foto de la pastilla/cápsula (ubicar en public/photos/)
  observaciones: "Indicaciones especiales", // Instrucciones o notas (ej: "Tomar en ayunas")
}
```

**Niveles de importancia:**
- `"baja"` → Suplementos o medicamentos opcionales
- `"media"` → Medicamentos importantes
- `"alta"` → Medicamentos críticos (no olvidar)

### Pasos para Editar

#### Para cambiar datos del paciente:

1. Localiza la línea que comienza con `paciente:`
2. Cambia el nombre entre comillas
3. Actualiza la fecha en `ultimaActualizacion:` en formato YYYY-MM-DD

#### Para añadir o editar una toma:

1. Localiza el array `tomas: [`
2. Copia una toma existente o crea una nueva
3. Modifica los valores: `momento`, `hora`, `color`, `icono`. 
4. El atributo `color` indica el color de fondo de la cabecera de la tarjeta de esa toma. El color de texto se obtendrá automáticamente por el contraste del color elegido.
5. El atributo `icono` establece la clase que se aplicará para establecer el icono. Ahora mismo se usa bootstrap icon pero podría usarse Font Awesome o Prime Icons.

#### Para añadir o editar un medicamento:

1. Dentro de la toma deseada, localiza el array `pastillas: [`
2. Copia un medicamento existente o crea uno nuevo
3. Rellena todos los campos con la información del medicamento

> [!IMPORTANT]
> Los nombres de las fotos deben coincidir **exactamente** con los archivos en `public/photos/`. Los nombres son sensibles a mayúsculas y minúsculas.

#### Para mostrar un aviso:

1. Localiza el objeto `mensaje:`. Tendrá la siguiente estructura:

   ```javascript
   mensaje: {
       mostrar: false,
       titulo: "En pruebas",
       texto: "Este aviso se mostrará durante la fase de pruebas.",
       tipo: "info", // "danger" o "warning"
       fechaDesde: "2026-01-01",
       fechaHasta: "2026-04-31",
     },
   ```

   

2. El atributo `mostrar` indica si se va a mostrar el mensaje o no. Un valor `true` lo mostrará y `false` no.

3. El atributo `titulo` se mostrará en el encabezado de la ventana. El `texto` es el cuerpo del mensaje.

4. El tipo puede ser `info`, `danger` o `warning` y determinará el estilo de la ventana del mensaje.

5. Opcionalmente, añade fechas en `fechaDesde` y `fechaHasta` para mostrar el mensaje durante la franja de tiempo indicada. Si no se añaden fechas se mostrará siempre.

### Notas Importantes

> [!WARNING]
> **Formato de fechas:** Siempre usar `YYYY-MM-DD` (ej: 2026-01-28).

> [!CAUTION]
> **Archivos de fotos:** Los nombres son sensibles a mayúsculas/minúsculas. Deben coincidir exactamente con los nombres en `prescripcion.ts`.

> [!NOTE]
> **Colores:** Usar formato hexadecimal precedido de `#` (ej: `"#c6e5fc"`).

---

## Estructura completa de `prescripcion.ts`

````typescript
/**
 * PRESCRIPCION.TS - Archivo de configuración de medicamentos
 * 
 * Este archivo contiene TODA la información sobre los medicamentos,
 * sus horarios (tomas) y propiedades.
 */

import { Prescripcion } from "./prescipcion.model";

export const PRESCRIPCION: Prescripcion = {
  
  // ========== INFORMACIÓN DEL PACIENTE ==========
  paciente: "Nombre del Paciente",              // Nombre de quién toma los medicamentos
  ultimaActualizacion: "2026-01-28",           // Fecha última actualización (YYYY-MM-DD)
  
  
  // ========== MENSAJE/AVISO ==========
  // Se muestra un banner en la app si mostrar: true
  mensaje: {
    mostrar: false,                             // true = mostrar el aviso | false = ocultarlo
    titulo: "Título del Aviso",                 // Título que aparece en el banner
    texto: "Contenido del aviso",               // Descripción del aviso
    tipo: "info",                               // "info" | "warning" | "danger"
    fechaDesde: "",                             // YYYY-MM-DD (vacío = siempre desde hoy)
    fechaHasta: "",                             // YYYY-MM-DD (vacío = sin fecha de fin)
  },
  
  
  // ========== TOMAS DEL DÍA ==========
  // Array con cada toma (Desayuno, Almuerzo, Merienda, Cena, etc.)
  tomas: [
    
    // --------- TOMA #1 ---------
    {
      momento: "Desayuno",                      // Nombre de la toma
      hora: "09:00",                            // Hora HH:MM (formato 24h)
      color: "#c6e5fc",                         // Color hexadecimal
      icono: "bi bi-brightness-alt-high-fill",  // Ícono de Bootstrap Icons
      
      // Array con medicamentos de esta toma
      pastillas: [
        
        // MEDICAMENTO #1
        {
          nombre: "Omeprazol",                  // Nombre comercial
          principioActivo: "Omeprazol",        // Componente activo
          dosis: "20mg",                        // Cantidad del medicamento
          cantidad: "1 cápsula",                // Unidades a tomar
          importancia: "media",                 // "baja" | "media" | "alta"
          motivo: "Protector de estómago",     // Para qué sirve
          fotoCaja: "omeprazol-caja.png",       // Foto de la caja (en public/photos/)
          fotoPastilla: "omeprazol-capsula.png",// Foto de la pastilla (en public/photos/)
          observaciones: "Tomar en ayunas",     // Instrucciones especiales
        },
        
        // MEDICAMENTO #2
        {
          nombre: "Coropres",
          principioActivo: "Carvedilol",
          dosis: "6.25mg",
          cantidad: "1 pastilla",
          importancia: "alta",
          motivo: "Tensión y corazón",
          fotoCaja: "carvedilol-caja.png",
          fotoPastilla: "",                     // Puede estar vacío si no hay foto
          observaciones: "No olvidar ninguna toma",
        },
        
        // ... más medicamentos ...
        
      ]
    },
    
    // --------- TOMA #2 ---------
    {
      momento: "Comida",
      hora: "14:00",
      color: "#f4e88c",
      icono: "bi bi-fork-knife",
      pastillas: []                             // Puede estar vacío (sin medicamentos)
    },
    
    // --------- TOMA #3 ---------
    {
      momento: "Tarde",
      hora: "16:00",
      color: "#f2a217",
      icono: "bi bi-sun-fill",
      pastillas: [
        // medicamentos aquí...
      ]
    },
    
    // ... más tomas ...
    
  ]
};
````

---

## Guía Rápida: Replicar la aplicación para otro paciente

Si quieres crear una nueva instancia de la aplicación para otro paciente, sigue estos pasos:

### 1. **Clonar el Repositorio**

Abre la terminal y ejecuta:

```bash
git clone https://github.com/borilio/pastillero-o-matic.git
cd pastillero-o-matic
```

Esto descargará una copia completa del proyecto en tu ordenador.

### 2. **Instalar Dependencias**

```bash
npm install
```

Esto descargará las librerías necesarias para ejecutar la aplicación.

### 2.1 **Cambiar el Nombre de la Aplicación (Opcional)**

Si quieres cambiar el nombre que aparece en el header y footer, edita el archivo `package.json`:

```json
{
  "name": "tu-nuevo-nombre-aqui",
  "version": "1.0.0",
  ...
}
```

El nombre y la versión se mostrarán automáticamente en la aplicación. No necesitas modificar ningún archivo de código.

### 3. **Usar la plantilla de prescripción**

En el proyecto encontrarás un archivo de referencia llamado **`prescripcion-plantilla.ts`** ubicado en:

```
src/app/data/prescripcion-plantilla.ts
```

Este archivo contiene la estructura básica y comentada de cómo debe ser el archivo `prescripcion.ts`. Puedes:

- **Opción A:** Copiar el contenido de `prescripcion-plantilla.ts` y pegarlo en `prescripcion.ts`, luego editar con los datos del nuevo paciente

- **Opción B:** Editar directamente `prescripcion.ts` utilizando la plantilla como referencia.

- **Opción C:** Borra el archivo `prescripcion.ts` y renombra `prescripcion-plantilla.ts` a `prescripcion.ts`. Después edita `prescripcion.ts`.

  > [!CAUTION]
  >
  > Cuidado con las acciones automáticas que puede hacer el IDE al editar o borrar los nombres de los archivos del proyecto.

Modifica estos campos principales:

- **`paciente:`** → Nombre del nuevo paciente
- **`ultimaActualizacion:`** → Fecha actual (formato YYYY-MM-DD)
- **`tomas:`** → Añade, elimina o modifica las tomas del día según sea necesario
- **`pastillas:`** → Actualiza los medicamentos de cada toma

Consulta la sección **"Manual: Cómo editar el archivo `prescripcion.ts`"** de arriba para más detalles sobre cada campo.

### 4. **Añadir Fotos de los Medicamentos**

Copia las fotos de las cajas y pastillas a la carpeta:

```
public/photos/
```

Los nombres de archivo deben coincidir **exactamente** con los especificados en `prescripcion.ts`:

```javascript
fotoCaja: "nombre-del-archivo.png"    // Busca este archivo en public/photos/
fotoPastilla: "nombre-del-archivo.png" // Busca este archivo en public/photos/
```

> [!IMPORTANT]
> Asegúrate de que los nombres de archivo sean **exactos** (mayúsculas, minúsculas, extensión). Los nombres son sensibles a estos cambios.

### 5. **Probar la Aplicación Localmente**

```bash
npm start
```

Esto abrirá la aplicación en `http://localhost:4200/`. Verifica que todos los medicamentos, fotos y datos se muestren correctamente.

### 6. **Desplegar en Netlify (Opcional)**

Si tienes una cuenta en Netlify:

1. Sube el proyecto a GitHub
2. Conecta el repositorio con Netlify
3. Netlify compilará y desplegará automáticamente cada cambio

**Ejemplo de URL desplegada:**
```
https://pastillero-o-matic-paciente-nombre.netlify.app/
```
