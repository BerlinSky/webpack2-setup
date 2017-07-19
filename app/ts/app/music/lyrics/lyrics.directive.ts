import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[lyricsEdited]'
})

export class LyricsDirective {
  @Input() lyricsEdited: string
  @HostBinding() innerText = `Updates from the LyricsDirective!!!`
}
