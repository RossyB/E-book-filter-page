import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genreFilter'
})
export class GenreFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
