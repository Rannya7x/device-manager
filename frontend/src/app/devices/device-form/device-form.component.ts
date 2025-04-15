import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';	
import { CategoryService } from '../../services/category.service';

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

	newDevice = {
		category_id: '',
		color: '',
		part_number: '',
	}

	constructor(private categoryService: CategoryService) { }

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
		console.log('Form submitted:', this.newDevice);
		form.resetForm();
		this.deviceAdded.emit();
	}
}
