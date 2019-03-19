import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loweCase'
})
export class LoweCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value as string).toLowerCase();
  }

}
