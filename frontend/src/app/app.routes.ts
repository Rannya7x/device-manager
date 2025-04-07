import { Routes } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { CategoriesComponent } from './categories/categories.component';

export const routes: Routes = [
    {
        path: 'devices',
        component: DevicesComponent,
        title: 'Devices Management',
    },
    {
        path: 'categories',
        component: CategoriesComponent,
        title: 'Categories Management',
    }
];
