import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importamos los componenentes para hacer la ruta
import { Login } from './Login/Login.component';
import { Gasolineras } from './Gasolineras/Gasolineras.component';
import { Contacto } from './Contacto/Contacto.component';
import { RepostajeComponent } from './Repostaje/Repostaje.component';
import { PipesComponent } from './Pipes/Pipes.component';

const appRoutes: Routes = [
    // cuando path no tiene nada estamos indicando el home de la pagina o en otras palabras el index
  {path: '', component: Login},

    // Para pasar un parametro por URL necesitamos indicar el ":" antes de indicar el parametro que tiene que ser el mismo nombre como declaramos despues para recoger la variable
  {path: 'Gasolinera/:id', component: Gasolineras},
  {path: 'Gasolinera/:id/:gasolinera', component: Gasolineras},
  {path: 'Gasolinera', component: Gasolineras},
  {path: 'Repostaje', component: RepostajeComponent},
    {path: 'Pipes', component: PipesComponent},
  {path: 'Contacto', component: Contacto},
    
    // los ** indica cuando la pagina no responde o dar un error donde va a ir la pagina en caso de que no responda
  {path: '**', component: Login}
];

// Lo necesita angular para cargar el array de rutas
export const appRoutingProviders: any[] = [];

// creamos una constante y la exportamos al igual que la de arriba pero esta nos vale para decir que la variable routing va a llevar nuestro array de rutas en un array de tipo ModuleWithProviders

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
