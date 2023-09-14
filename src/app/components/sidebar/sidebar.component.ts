import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  header = 'Documentacion de Algoritmos';
  links: Array<{ text: string, path: string }> = [
    { text: 'Bubble Sort', path: '#' },
    { text: 'Merge Sort', path: '#' }
  ];
}
