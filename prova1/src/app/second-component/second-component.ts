import { Component } from '@angular/core';
import { FourthComponent } from '../fourth-component/fourth-component';

@Component({
  selector: 'app-second-component',
  imports: [FourthComponent],
  templateUrl: './second-component.html',
  styleUrl: './second-component.css',
})
export class SecondComponent {
name = 'boh';
}
