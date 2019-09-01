import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



// Importamos los componenentes para hacer la ruta

import { Gasolineras } from './Gasolineras/Gasolineras.component';
import { Login } from './Login/Login.Component';


const routes: Routes = [
    
{path: '', component: Gasolineras},

{path: 'Gasolineras', component: Gasolineras},
    
    // los ** indica cuando la pagina no responde o dar un error donde va a ir la pagina en caso de que no responda
{path: '**', component: Gasolineras}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
