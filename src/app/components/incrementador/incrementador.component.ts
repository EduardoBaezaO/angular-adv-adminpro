import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  ngOnInit(){
    this.btnClase = `btn ${ this.btnClase }`;
  }

  @Input('valor') progreso: number = 50; //en el padre se utiliza el nombre que esta entre los parentesis de @Input('valor') en este caso valor
  // @Input() progreso: number = 50; //en el padre se utiliza el nombre de la variable en este caso progreso
  @Input() btnClase: string = 'btn-success';
  
  @Output() escuchaProgreso: EventEmitter<number> = new EventEmitter();

  cambiaProgreso( valor: number){
    if(this.progreso >= 100 && valor >= 0){
      this.escuchaProgreso.emit(100);
      return this.progreso = 100;
    }
    if(this.progreso <= 0 && valor <= 0){
      this.escuchaProgreso.emit(0);
      return this.progreso = 0;
    }
    this.progreso = this.progreso + valor;
    this.escuchaProgreso.emit( this.progreso );
    return this.progreso;
  }

  onChange( nuevoValor: number ){
    if( nuevoValor >= 100){
      this.progreso = 100;
    }else if( nuevoValor <= 0){
      this.progreso = 0;
    }else{
      this.progreso = nuevoValor;
    }
    this.escuchaProgreso.emit( this.progreso );
  }

}
