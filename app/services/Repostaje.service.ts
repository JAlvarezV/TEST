import { Injectable } from '@angular/core';

@Injectable()
export class RepostajeService{
    
    // Punto a tener en cuenta el servicio es algo que nosotros ofrecemos a los componentes ( explicado para saber que los servicios tienen que tener variables que dar a los componentes), por eso yo quiero devolver litros y gasolineras al componente normalmente se usa para serivcios grandes como peticiones http comunicaciones con base de datos etc... Esto es de manera ejemplo 
    
    public litros:Array<number> = [];
    public gasolineras:Array<string> = [];
    
    holamundo(){
        return 'todo ok';
    }
    
    // variable que devuelve una coleccion vacia definida
    getLitros(){
        return this.litros;
    }
    
    // variable que devuelve una coleccion vacida definica
    getGasolineras(){
        return this.gasolineras;
    }
    
    // dandole los litros y el nombre de la gasolinera de entrada este metodo agrega a cada coleccion una fila tanto como a la de litros como a la de gasolineras con los datos que le pasemos
    addRepostaje(litros:number, gasolineras:string){
        this.litros.push(litros);
        this.gasolineras.push(gasolineras);
    }
    
    
    // igual que el de agregar a la coleccion pero todo lo contrario sino que borra el elemento que le digamos mediante el index, el otro elemento que es 1 en ambois es cuantas filas queremos eliminar a partir del index dado
    deleteRepostaje(index:number){
        this.litros.splice(index,1);
        this.gasolineras.splice(index,1);
    }
    
    
}