import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface Device {
    id: number;
    color: string;
    category: string;
    partNumber: number;
}

@Injectable({
    providedIn: 'root'
})
export class DeviceService {
	private apiUrl = '/devices';

    constructor(private http: HttpClient) { }

	getDevices(): Observable<Device[]> {
		return this.http.get<any[]>(this.apiUrl).pipe(
            map(devices => devices.map(device => ({
                id: device.id,
                color: device.color,
                category: device.category_id,
                partNumber: device.part_number
            })))
        );
	}
}
