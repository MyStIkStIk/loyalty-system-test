import { Component, Input, OnChanges } from '@angular/core';
import { ElementModel } from '../../interfaces/schema.model';

@Component({
  selector: 'custom-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() el!: ElementModel;
}
