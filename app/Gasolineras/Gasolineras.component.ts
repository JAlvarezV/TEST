import { Component } from '@angular/core';
import { Gasolinera } from './Gasolinera';
// estas importaciones de clases son las necesarias para pasar parametros por URL
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    selector:'Gasolinera1',
    templateUrl: './Gasolineras.component.html'
    
})


export class Gasolineras{
    
    public Gasolineras1:Array<Gasolinera>;
    public repsol:Gasolinera;
    public parametro;
    public parametro2;
   
    /*ngOnInit(){
        console.log(this.repsol.calle);
    }
    */
    
    
    // iniciamos las dos variables necesarias en el constructor para recoger lo parametros por URL estas variables son _router y _route
    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){
        
        this.Gasolineras1 = [
            new Gasolinera('Repsol','Mendez Alvaro'),
            new Gasolinera('Shell','Jose luis gil'),
            new Gasolinera('BP','calle de la desgracia')
        ]
                   
}

    
    ngOnInit(){
        // esta sentencia nos permite recoger de la URL los parametros y de esta manera recogemos los parametros pasados por url
         this._route.params.forEach((params: Params) => {
        this.parametro = params['id'];
        this.parametro2 = params['gasolinera'];
    })
        
    }

    
    LoginLink(){
        this._router.navigate(['']);
    }

    
    ContactoLink(){
        this._router.navigate(['/Contacto']);
    }

   
    
    
}