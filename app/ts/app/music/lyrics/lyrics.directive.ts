import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[lyricsEdited]'
})

export class LyricsDirective {
  @Input() lyricsEdited: string

  // @HostBinding() innerText = `Updates from the LyricsDirective!!!`

  @HostBinding() get innerText() {
    return this.lyricsEdited
  }

  @HostListener('click', ['$event']) onclick($event: any) {
    console.log('clicked here!!!', $event)
    this.lyricsEdited = 'Dynamically changed by click event'
  }
}
