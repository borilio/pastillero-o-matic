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

export interface Prescripcion {
  paciente: string;
  ultimaActualizacion: string;
  tomas: Toma[];
}