import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';	
import { CategoryService } from '../../services/category.service';
import { DeviceService } from '../../services/device.service';
import { Device } from '../../interfaces/devices';

interface Category {
	id: number;
	name: string;
}

@Component({
  selector: 'app-device-form',
	standalone: true,
  imports: [
		CommonModule,
		FormsModule,
	],
  templateUrl: './device-form.component.html',
  styleUrl: './device-form.component.css'
})
export class DeviceFormComponent implements OnInit {
  @Output() deviceAdded = new EventEmitter<void>();

	categories: Category[] = [];

	newDevice: Omit<Device, 'id' | 'created_at' | 'updated_at'> = {
		category_id: 0,
		color: '',
		part_number: 0,
	}

	constructor(
		private categoryService: CategoryService,
		private deviceService: DeviceService
	) { }

	ngOnInit(): void {
			this.loadCategories();
	}

	loadCategories(): void {
		this.categoryService.getCategories().subscribe({
			next: (categories) => this.categories = categories,
			error: (error) => console.error('Error fetching categories:', error)
		})
	}

	onSubmit(form: NgForm): void {
		this.deviceService.createDevice(this.newDevice).subscribe({
			next: () => {
				form.resetForm();
				this.deviceAdded.emit();
			},
			error: (error: any) => console.error('Error creating device:', error)
		})
		console.log('Form submitted:', this.newDevice);
		
	}
}
