import { Pipe, PipeTransform } from '@angular/core';

/* El conversor nos permite darle
   el nombre a la Pipe personalizada
*/
@Pipe({ name: 'conversor'})

export class ConversorPipe implements PipeTransform{
    transform(valor1:number, valor2:number):string{
        let value_one = parseInt(valor1);
        let value_two = parseInt(valor2);
        
        
            let result = "La multiplicación de "
            +value_one + " por " + value_two + " = " + (value_one * value_two);
    return result;
    }
}