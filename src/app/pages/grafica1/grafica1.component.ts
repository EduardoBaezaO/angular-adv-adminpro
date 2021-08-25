import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  public tituloG1: string = 'Grafico 1';
  public tituloG2: string = 'Grafico 2';
  public tituloG3: string = 'Grafico 3';
  public tituloG4: string = 'Grafico 4';

  public labelsG1: string[] = ['G1-Ventas','G1-Compras','G1-Ganancia'];
  public labelsG2: string[] = ['G2-Compras','G2-Ventas','G2-Ganancia'];
  public labelsG3: string[] = ['G3-Ventas','G3-Ganancia','G3-Compra'];
  public labelsG4: string[] = ['G4-Ganancia','G4-Compras','G4-Ventas'];

  public dataG1 = [[350, 150, 140],];
  public dataG2 = [[250, 750, 160],];
  public dataG3 = [[150, 550, 180],];
  public dataG4 = [[650, 350, 160],];

  constructor() { }

  ngOnInit(): void {
  }

}
