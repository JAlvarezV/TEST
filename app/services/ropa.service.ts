// Con el módulo "Injectable" recogemos los datos necesarios para crear un servicio y traernos el decorador de injectable
import { Injectable } from '@angular/core';


// llamamos al decorador ya que lo que queremos es asignarlos para la clase que vamos a crear
@Injectable()
// creamos la clase que queramos y vamos dando las funciones que deseamos ( LO HE DADO DE ALTA EN LOGIN COMPONENT);
export class RopaService{
    public nombre_prenda = 'Camiseta Nike';
    
    
    prueba()
    {
        return this.nombre_prenda;
    }
    
    pruebaParametroEntrada(nombre_camiseta)
    {
        return nombre_camiseta;
    }
}