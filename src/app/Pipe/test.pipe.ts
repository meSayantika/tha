import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: string, limit: number): any {
    console.log(limit);
    if(value.length > 15) {
      return value.substring(0, 15).concat('...');
    }
    return value;
  }

}
