import { Component, Inject, Injectable, Input, OnInit } from '@angular/core';
import { SmallCardComponent } from '../small-card.component';

@Component({
  selector: 'app-card-tape',
  standalone: true,
  imports: [SmallCardComponent],
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
