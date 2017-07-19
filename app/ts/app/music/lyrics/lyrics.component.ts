import { Component, Input } from '@angular/core';
@Component({
  selector: 'lyrics',
  templateUrl: './lyrics.component.pug',
  styleUrls: ['./lyrics.component.scss']
})
export class LyricsComponent {
  @Input() lyricText: any
  @Input() lyricsEdited: string
}
