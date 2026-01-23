export interface Pastilla {
  nombre: string;
  dosis: string;
  cantidad: string;
  importancia: 'alta' | 'media' | 'baja'; // Tipado estricto para importancia
  // Atributos opcionales (pueden ser null o no existir)
  motivo?: string | null;
  principioActivo?: string | null;
  observaciones?: string | null;
  fotoCaja?: string | null;
  fotoPastilla?: string | null;
}

export interface Toma {
  momento: string;
  hora: string;
  color?: string;
  icono?: string;
  pastillas: Pastilla[];
}

export interface Mensaje {
  mostrar: boolean;        // Interruptor principal para que aparezca o no
  titulo?: string;         // Un encabezado corto (ej: "¡AVISO!")
  texto: string;           // El cuerpo del mensaje (ej: "No tomar la pastilla X...")
  tipo: 'info' | 'warning' | 'danger'; // Determina el color/gravedad
  fechaDesde?: string;    // Para que sepas desde cuándo es válido el aviso
  fechaHasta?: string;       // Para que sepas cuándo puedes dejar de mostrarlo
}


export interface Prescripcion {
  paciente: string;
  ultimaActualizacion: string;
  mensaje: Mensaje;
  tomas: Toma[];
}