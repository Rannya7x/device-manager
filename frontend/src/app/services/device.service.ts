import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
		return this.http.get<Device[]>(this.apiUrl);
	}
}
