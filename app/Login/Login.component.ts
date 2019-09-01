import { Component } from '@angular/core';
import { Usuario } from './Usuario';

// Importamos el servicio que hemos creado
import { RopaService } from '../services/ropa.service';

@Component({
    selector: 'Login',
    templateUrl: 'Login.component.html',
    
    // la propiedad providers del decorador de Component nos permite añadir servicio al componente en el que estamos para este caso estamos añadiendo el servicio al componente Login, es decir nos permite instaciar objetos del servicio que añadamos
    
    providers:[RopaService]
    
    
})

export class Login{
    
    public arrayUsuarios:Array<Usuario>;
    public inicio:boolean;
    public usuarioRecogido:string;
    public passwordRecogido:string;
    public x:number = 0;
    public usuarioLogeado:boolean = false;
    
    // Para poder usar el servicio hay que instanciarlo en una propiedad para ello llamamos al contructor y lo iniciamos hay
    constructor(
       private _ropaService: RopaService
    ){
        this.arrayUsuarios = [
            
            new Usuario('Javi',24,'Javi'),
            new Usuario('Jordan Belfort',57,'Puto Amo'),
            new Usuario('Emilio Duró',59,'Motivador'),
            new Usuario('Admin',99,'Admin')
        ]
        
    }
    
    ngOnInit(){
       // para ver si el servicio esta bien vamos a hacer un console log de la funcion prueba() que hemos definido en nuestro servicio, para ello llamamos a la instancia realizada en el constructor y llamamos a la funcion del objeto
        
        
        console.log(this._ropaService.prueba()); 
        this._ropaService.nombre_prenda = 'hola';
        console.log(this._ropaService.prueba()); 
        console.log(this._ropaService.pruebaParametroEntrada('Pantalon de chandal'));
         
    }
    
    
    
    
    inicioSesion(){
        
        
      /*  for (this.x=0;this.x<this.arrayUsuarios.length;this.x++){
            if(this.arrayUsuarios[this.x].nombre === this.usuarioRecogido && this.arrayUsuarios[this.x].password === this.passwordRecogido){
                console.log(this.passwordRecogido);
                console.log(this.arrayUsuarios[this.x].password);
                this.usuarioLogeado = true;
           
            }else{
                this.inicio = false;
                console.log(this.inicio);
            }
        }
        
        */
        
    /*   do{
           try{
           
           if(this.arrayUsuarios[this.x].nombre === this.usuarioRecogido && this.arrayUsuarios[this.x].password === this.passwordRecogido){
               
                console.log(this.passwordRecogido);
                console.log(this.arrayUsuarios[this.x-1].password);
                this.inicio = true;
                this.usuarioLogeado = true;
              
              }else{
                  this.inicio = false;
                console.log(this.passwordRecogido);
                console.log(this.arrayUsuarios[this.x-1].password);
                console.log(this.x);
                this.x = this.x+1;
              }
              
        }catch{
            this.x = 99;
            this.inicio = true;
            console.log(this.x);
              
              }

       }while( this.usuarioLogeado == true);*/
        console.log(this.usuarioRecogido);
        console.log(this.passwordRecogido);
        
        this.x = 0;
        this.usuarioLogeado = false;
        
        while(this.usuarioLogeado == false){
            if(this.arrayUsuarios[this.x].nombre === this.usuarioRecogido && this.arrayUsuarios[this.x].password === this.passwordRecogido){
               
             console.log(this.passwordRecogido);
             console.log(this.arrayUsuarios[this.x].password);
                this.inicio = true;
                this.usuarioLogeado = true;
                this.x = 5;
              
              }else{
                  this.inicio = false;
                console.log(this.passwordRecogido);
                console.log(this.arrayUsuarios[this.x].password);
                console.log(this.x);
                this.x = this.x+1;
              }
        }
        
        
        
        /*if(this.x === 99){
            this.inicio = false;
        }*/
    
    
    
    }
    
    
    
    cerrarSesion(){
        this.inicio = false;
        this.x = 4;
        this.passwordRecogido = '';
        this.usuarioRecogido = '';
    }
    


    
}


