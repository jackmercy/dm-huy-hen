import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ListItem } from './list-item.model';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule
  ],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  @Input({ required: true }) item: ListItem = {
    title: '',
    description: '',
  };
  @Output() edit = new EventEmitter<ListItem>();
}
