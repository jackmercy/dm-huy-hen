import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListItem } from '../pages/list-item/list-item.model';
import { ListItemComponent } from '../pages/list-item/list-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Hèn Huy Hè';
  listItems: ListItem[] = [
    {
      id: 1,
      title: 'Zed không có damge ăn rồng anh ơi.',
      description: 'Zed level 8, 146 dmg, không dmg ăn rồng nên không vào đánh chung, thua game.'
    },
    {
      id: 2,
      title: '1 đêm 5 cử',
      description: 'Legend'
    }
  ];
}
