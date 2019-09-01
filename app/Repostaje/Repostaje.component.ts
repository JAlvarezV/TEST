import { Component } from '@angular/core';
import { RepostajeService } from '../Services/Repostaje.service';

@Component({
    
    selector: 'Repostaje',
    templateUrl: 'Repostaje.component.html',
    
    // la propiedad providers del decorador de Component nos permite añadir servicio al componente en el que estamos para este caso estamos añadiendo el servicio al componente Login, es decir nos permite instaciar objetos del servicio que añadamos
    providers: [RepostajeService]
    
    
})

export class RepostajeComponent{
    
    public id:Array<number>;
    public litros:Array<number>;
    public gasolinera:Array<string>;
    public litrosARecoger:number;
    public litrosAGuardar:number;
    public gasolineraARecoger:string;
    public gasolineraAGuardar:string;
   
    
    // Creamos las variables para guardar y recoger, para guardar no funciona no se por que averiguar mas tarde
    
     // Para poder usar el servicio hay que instanciarlo en una propiedad para ello llamamos al contructor y lo iniciamos hay
    constructor(
        private _Repostaje: RepostajeService
    ){
         
    }
    
    
    ngOnInit(){
        console.log(this._Repostaje.holamundo());
        this.litros = this._Repostaje.getLitros();
        this.gasolinera = this._Repostaje.getGasolineras();
        
        //this._Repostaje.addRepostaje(54,'Campsa');
    }
    
    
    guardarLitros(){
        this.litrosARecoger = this.litrosAGuardar
        console.log(this.litrosAGuardar);
    }
    
    guardarGasolinera(){
        this.gasolineraARecoger = this.gasolineraAGuardar  
        console.log(this.gasolineraAGuardar);
    }
    
    
    addRepostaje(){
        this._Repostaje.addRepostaje(this.litrosARecoger, this.gasolineraARecoger);
        
        this.litrosARecoger = null;
        this.gasolineraARecoger = null;
    }
    
    deleteRepostaje(index:number){
        this._Repostaje.deleteRepostaje(index);
    }
    
    
}