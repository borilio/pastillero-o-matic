import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
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

}
