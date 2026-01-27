import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Prescripcion } from './data/prescipcion.model';
import { PRESCRIPCION } from './data/prescripcion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //Aquí se cargan toda la info de prescripcion.ts, listos para mostrarlos en el app.html
  public miPrescripcion: Prescripcion = PRESCRIPCION;

  // Variable local para permitir cerrar el mensaje de aviso
  public mensajeCerrado: boolean = false;

  // Función que cierra el mensaje (si lo hay)
  public cerrarMensaje() {
    this.mensajeCerrado = true;
  }

  /**
   * Función que recibe una fecha y retorna un string que representa el tiempo que hace desde que se actualizó
   * Ejemplo:
   * 
   * - ayer
   * - hoy
   * - hace 3 días
   * - hace 5 meses
   * 
   * @param fechaStr fecha desde la que queremos generar el texto 
   * @returns Un texto que representa de forma legible el tiempo que ha pasado desde la fecha recibida hasta la actual 
   * 
   */
  public obtenerHaceCuanto(fechaStr: string): string {
    const fechaAct = new Date(fechaStr);
    const ahora = new Date();

    // Diferencia en milisegundos convertida a días
    const difTiempo = ahora.getTime() - fechaAct.getTime();
    const dias = Math.floor(difTiempo / (1000 * 60 * 60 * 24));

    if (dias === 0) return 'hoy';
    if (dias === 1) return 'ayer';
    if (dias > 1 && dias < 30) return `hace ${dias} días`;
    if (dias < 0) return '¿viajando en el tiempo?';

    const meses = Math.floor(dias / 30);
    return meses === 1 ? 'hace 1 mes' : `hace ${meses} meses`;
  }

  /**
   * Función que comprueba los atributos fechaDesde y fechaHasta para comprobar si debemos mostrar el aviso (si la fecha actual)
   * está entre las dos fechas del mensaje.
   * @returns true si debemos mostrar el mensaje o false en caso contrario.
   */
  public mostrarAvisoPorFecha(): boolean {
    const m = this.miPrescripcion.mensaje;

    if (!m.mostrar) return false;

    // Si no hay rango de fechas, el mensaje se muestra siempre
    if (!m.fechaDesde || !m.fechaHasta) return true;

    const hoy = new Date().setHours(0, 0, 0, 0);
    const inicio = new Date(m.fechaDesde).setHours(0, 0, 0, 0);
    const fin = new Date(m.fechaHasta).setHours(0, 0, 0, 0);

    return hoy >= inicio && hoy <= fin;
  }

}
