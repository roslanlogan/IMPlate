import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'round'})
export class RoundPipe {
  transform (input:any) {
    return Math.floor(input);
  }
}