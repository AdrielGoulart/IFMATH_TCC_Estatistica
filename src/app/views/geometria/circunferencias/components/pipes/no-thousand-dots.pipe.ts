import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noThousandDots'
})
export class NoThousandDotsPipe implements PipeTransform {

  transform(value: string, args: any[]): string {
    if(value) {
      return value.replace('.', '');
    }
    return '';
  }

}
