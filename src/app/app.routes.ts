import { Routes } from '@angular/router';
import { Alumnos } from './features/alumnos/alumnos';

export const routes: Routes = [
    {
        path: "", component: Alumnos  //localhost:3000 
    },
    {
        path: 'alumnos', //preferir no hardcodear rutas

        component: Alumnos,
    },

    {
        path: "cursos",
        /* component: Cursos */
        //lazy loading: cargar el componente Cursos solo cuando se navegue a la ruta /cursos
        loadComponent: () => import('./features/cursos/cursos').then(m => m.Cursos)
    },
    {
        path: "inscripciones",
        loadComponent: () => import('./features/inscripciones/inscripciones').then(m => m.Inscripciones)
    },

    //TODO: add a wildcard route 
];
