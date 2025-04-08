import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Device {
    id: number;
    color: string;
    category: string;
    partNumber: number;
};  

@Component({
    selector: 'app-devices',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './devices.component.html',
    styleUrl: './devices.component.css'
})
export class DevicesComponent {
  devices: Device[] = [
    {
      id: 1,
      color: 'Red',
      category: 'Electronics',
      partNumber: 123456
    },
    {
      id: 2,
      color: 'Blue',
      category: 'Furniture',
      partNumber: 654321
    },
    {
      id: 3,
      color: 'Green',
      category: 'Clothing',
      partNumber: 789012
    }
  ]
}
