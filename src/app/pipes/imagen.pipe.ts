import { Pipe, PipeTransform } from '@angular/core';

const URL = 'https://image.tmdb.org/t/p';

@Pipe({
  name: "imagen"
})

export class ImagenPipe implements PipeTransform {

transform (imagen: string, size: string='w500'): string {
  if(!imagen){
    return;
  }
  const imgURL = `${URL}/${size}${imagen}`;
    console.log('URL', imgURL);
    return imgURL;
  } 
}

/* URL de la imagen de ejemplo
https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
*/