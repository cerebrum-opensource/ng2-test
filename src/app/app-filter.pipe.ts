import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
  name: 'reverseFilterPipe',
  pure: false
})
export class ReverseFilterPipe implements PipeTransform{
  transform (values: string) {
    if (values) {
      values = values + '';
      return values.split('').reverse().join('');
    }
  }
}
