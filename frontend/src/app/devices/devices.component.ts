import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceService } from '../services/device.service';
import { DeviceFormComponent } from './device-form/device-form.component';


interface Device {
    id: number;
    color: string;
    category: string;
    partNumber: number;
};  

@Component({
    selector: 'app-devices',
    standalone: true,
    imports: [
      CommonModule,
      DeviceFormComponent
    ],
    templateUrl: './devices.component.html',
    styleUrl: './devices.component.css'
})
export class DevicesComponent {
  devices: Device[] = [];
  isLoading: boolean = true;

  constructor(private deviceService: DeviceService) { }

  loadDevices() {
    this.isLoading = true;
    this.deviceService.getDevices().subscribe({
      next: (data) => {
        this.devices = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching devices:', error);
        this.isLoading = false;
      }
    });
  }

  ngOnInit(): void {
    this.loadDevices();
  }
}
