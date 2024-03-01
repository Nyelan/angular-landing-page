import { Component } from '@angular/core';
import { CardTapeComponent } from './card-tape/card-tape.component';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [CardTapeComponent],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {

}
