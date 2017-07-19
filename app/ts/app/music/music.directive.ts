import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[songList]'
})
export class MusicDirective {
  @HostBinding() innerText = `Updates from the MusicDirective!!!`
}
