import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {

  // Load Image Default
  @HostListener('error') handleError(): void {
    const elementNative = this.elementHost.nativeElement
    console.log('Imagen no encontrada', this.elementHost)
    elementNative.src = 'https://firebasestorage.googleapis.com/v0/b/inmueble-ec.appspot.com/o/img-static%2Fimg_not_found.jpg?alt=media&token=e9063d25-975e-418d-a260-2103d3f5846f'
  }

  constructor(private elementHost: ElementRef) { }

}
