import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceService } from '../services/device.service';
import { DeviceFormComponent } from './device-form/device-form.component';
import { Device } from '../interfaces/devices';  
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

  ngOnInit(): void {
    this.loadDevices();
  }

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

  deleteDevice(deviceId: number): void {
    if (confirm('Are you sure you want to delete this device?')) {
      this.deviceService.deleteDevice(deviceId).subscribe({
        next: () => {
          this.devices = this.devices.filter(device => device.id !== deviceId);
          console.log(`Device with ID ${deviceId} deleted successfully.`);
        },
        error: (error) => {
          console.error(`Error deleting device with ID ${deviceId}:`, error);
          alert(`Error deleting device: ${error.message || 'Unknown error'}`);
        }
      });
    }
  }
}
