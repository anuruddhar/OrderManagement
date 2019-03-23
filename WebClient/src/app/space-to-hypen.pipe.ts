import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceToHypen'
})
export class SpaceToHypenPipe implements PipeTransform {

  transform(value: string, args?: string): string {
    return value.replace(' ', (args == undefined) ? ' - ': args);
  }

}
