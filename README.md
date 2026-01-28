# 💊 Pastillero-O-Matic

Sistema de gestión de medicación personalizada para un paciente. Este proyecto permite visualizar de forma clara y sencilla las tomas diarias, con detalles visuales y fotos para evitar confusiones.

## 🛠️ Archivo de Configuración Principal

Toda la personalización del tratamiento se realiza en un único lugar:

📍 `src/app/data/prescripcion.ts`

{{TODO: añadir enlace al archivo de github}}

MODIFICAR LO DE ABAJO


### Cómo modificar el contenido

El archivo exporta un objeto llamado `miPrescripcion`. Aquí tienes los campos clave para "tu yo del futuro":

#### 1. Información de Cabecera
* **`paciente`**: Nombre que aparece bajo el logo.
* **`ultimaActualizacion`**: Fecha en formato `YYYY-MM-DD`. El sistema calcula automáticamente el tiempo transcurrido (ej: "Actualizado hace 2 días").

#### 2. Mensajes de Aviso (`mensaje`)
Ideal para cambios temporales o recordatorios importantes.
* **`mostrar`**: `true` para que aparezca, `false` para ocultarlo.
* **`tipo`**: 
    * `'danger'` (Rojo): Avisos críticos.
    * `'warning'` (Naranja): Precauciones.
    * `'info'` (Azul): Información general.
* **`fechaDesde` / `fechaHasta`**: Rango de fechas en el que el aviso será visible. Fuera de ese rango, desaparecerá solo.

#### 3. Gestión de Tomas (`tomas`)
Cada bloque horario (Desayuno, Comida, etc.) es un objeto dentro del array `tomas`:
* **`color`**: Código Hexadecimal (ej: `#fef3c7`). *Nota: El sistema ajusta el color del texto automáticamente para mantener el contraste.*
* **`icono`**: Nombre de clase de [Bootstrap Icons](https://icons.getbootstrap.com/) (ej: `bi-sun`, `bi-moon-stars`, `bi-cup-hot`).

#### 4. Medicamentos (`pastillas`)
Dentro de cada toma, define las pastillas:
* **`importancia`**: 
    * `'alta'`: 3 puntos rojos.
    * `'media'`: 2 puntos naranjas.
    * `'baja'`: 1 punto verde.
* **`fotoCaja` / `fotoPastilla`**: Nombre del archivo (ej: `omeprazol_caja.jpg`). Las imágenes deben estar en la carpeta `public/photos/`.

---

## 📂 Estructura de Archivos
* `src/app/data/prescripcion.ts`: **El cerebro**. Aquí va toda la info.
* `public/photos/`: Carpeta donde debes subir las fotos de las cajas y pastillas.
* `public/img/logo.png`: El logo que aparece en la cabecera.

---

## 🎨 Notas de Estilo (Tailwind)
Si necesitas tocar el HTML, recuerda que estamos usando:
* **Zoom**: El efecto de zoom se eliminó para evitar conflictos de scroll, pero se mantiene una estructura limpia de `w-32` para las fotos.
* **Animaciones**: Usamos `animate.css`. Las clases como `animate__fadeInDown` hacen que los detalles se deslicen suavemente.
* **Extensión**: Asegúrate de tener activa la extensión de **Tailwind CSS IntelliSense** en VS Code para ver los colores y autocompletar clases.

---

## 🚀 Despliegue
Para aplicar cambios:
1. Edita `prescripcion.ts`.
2. Sube los cambios a tu repositorio o servidor.
3. ¡Listo! La Señora Dolores verá la versión actualizada al recargar la web.