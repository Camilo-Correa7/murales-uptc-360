import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MuralModels } from '../models/mural.models';

@Component({
  selector: 'app-mural-info',
  imports: [CommonModule],
  templateUrl: './mural-info.html',
  styleUrl: './mural-info.css',
})
export class MuralInfo{
  //Mural Actual que se esta visualizando 
  @Input() muralActual?: MuralModels;
}
