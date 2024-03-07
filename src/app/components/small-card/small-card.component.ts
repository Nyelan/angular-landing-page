import { Component, Inject, Injectable, Input } from '@angular/core';
import { CardTapeComponent } from './card-tape/card-tape.component';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [CardTapeComponent],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})

@Injectable()
export class SmallCardComponent {
  @Input()
  title = '';
  @Input()
  desc:string = '';
  @Input()
  img:string = '';

}
