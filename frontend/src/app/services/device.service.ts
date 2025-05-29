import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from '../interfaces/devices';

@Injectable({
    providedIn: 'root'
})
export class DeviceService {
	private apiUrl = '/api/devices';

    constructor(private http: HttpClient) { }

    createDevice(deviceData: Omit<Device, 'id' | 'created_at'|'updated_at'>): Observable<Device> {
        return this.http.post<Device>(this.apiUrl, deviceData);
    }

	getDevices(): Observable<Device[]> {
		return this.http.get<Device[]>(this.apiUrl);
	}

    deleteDevice(deviceId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${deviceId}`);
    }
}
