import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'contacto',
    templateUrl: '/Contacto.component.html',
    styleUrls: ['./Contacto.component.css']
})

export class Contacto{
    
    public nombre:string;
    public correo:string;
    public telefono:number;
    public parametro;
    
    
    
    constructor(
    
    // Para poder usar la navegación entre rutas en un componente tenemos que llamar a los objetos Router, ActrivatedRoute y Params y crear dos variables  de esta manera podemos pasar parametros y pasarle rutas a _router.navigate
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.nombre = 'Javi';
        this.correo = 'ejemplocorreo@ejemplocorreo.com'
        this.telefono = 6546548723;
    }
    
    
    
    
    GasolineraLink(){
        this._router.navigate(['/Gasolinera','456','789']);
    }
}