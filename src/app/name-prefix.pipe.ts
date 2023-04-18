import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePrefix',
  pure: true,
})
export class NamePrefixPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return `${this.transformGenderType(
      args[0] as boolean
    )} FIRST PIPE ${value}`;
  }

  transformGenderType(isMale: boolean) {
    return isMale ? 'Mr.' : 'Mrs.';
  }
}
