import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mayuscula'
})
export class MayusculaPipe implements PipeTransform{

    transform(valor: String): String{
        return valor.toUpperCase();
    }
}