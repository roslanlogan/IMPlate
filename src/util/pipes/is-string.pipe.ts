import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'isString'})
export class IsStringPipe implements PipeTransform {

  transform(value: string) {
    return typeof value === 'string';
  }
}
