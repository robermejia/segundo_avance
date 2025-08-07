import { Routes } from '@angular/router';
import { Alumnos } from './features/alumnos/alumnos';
import { Navegacion } from '../shared/enums/enums';



export const routes: Routes = [
    {
        path: "", component: Alumnos   //localhost:3000 
    },
    {
        path: Navegacion.Alumnos, //Usando Enums

        component: Alumnos,
    },

    {
        path: Navegacion.Cursos, //Usando Enums

        /* component: Cursos */
        //lazy loading: cargar el componente Cursos solo cuando se navegue a la ruta /cursos
        loadComponent: () => import('./features/cursos/cursos').then(m => m.Cursos)
    },
    {
        path: Navegacion.Inscripciones,//Usando Enums
        
        loadComponent: () => import('./features/inscripciones/inscripciones').then(m => m.Inscripciones)
    },

    //TODO: add a wildcard route 
];
