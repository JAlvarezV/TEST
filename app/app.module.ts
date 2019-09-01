import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';


import { Contacto } from './Contacto/Contacto.component';
import { AppComponent } from './app.component';
import { Login } from './Login/Login.component';
import { Gasolineras } from './Gasolineras/Gasolineras.component';
import { RepostajeComponent} from './Repostaje/Repostaje.component';
import { PipesComponent } from './Pipes/Pipes.component';


//importar Pipes


@NgModule({
  declarations: [
    AppComponent,
    Login,
    Gasolineras,
    Contacto,
    RepostajeComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
