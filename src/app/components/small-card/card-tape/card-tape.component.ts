import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-tape',
  standalone: true,
  imports: [],
  templateUrl: './card-tape.component.html',
  styleUrl: './card-tape.component.css'
})
export class CardTapeComponent {
  @Input()
  title:string = '';
  @Input()
  desc:string = '';
  @Input()
  img:string = '';
}
