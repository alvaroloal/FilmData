import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(imageUrl: string): string {

    let url = "https://media.themoviedb.org/t/p/w220_and_h330_face";


    return url + imageUrl;
  }

}
