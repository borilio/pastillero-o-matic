import { registerLocaleData } from '@angular/common';
import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import localeEs from '@angular/common/locales/es'; //Importamos los datos para español (por ejemplo las fechas en los pipes)

registerLocaleData(localeEs, 'es-ES');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    { provide: LOCALE_ID, useValue: "es-ES"}
    
  ]
};
