import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu: any[] = [
    {
      titulo: 'DashBoard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', url: '/'},
        { titulo: 'Progress Bar', url: 'progress'},
        { titulo: 'Graficas', url: 'grafica1'},
        { titulo: 'Promesas', url: 'promesas'},
        { titulo: 'Rxjs', url: 'rxjs'},
      ]
    }
  ];

  constructor() { }
}
