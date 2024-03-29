import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: ``
})
export class IncrementadorComponent implements OnInit {
  
  @Input('valor') progreso:number = 50;
  @Input() btnClass:string = 'btn-primary';

  @Output('valor') valorSalida:EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  cambiarValor(valor:number){

    if(this.progreso >= 100 && valor >= 0){
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }

    if(this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }

    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }

  onChange(newValue:number){
    
    if (newValue>= 100) {       
      newValue= 100;  
    } else if (newValue<= 0) {
      newValue = 0;
    }

    this.valorSalida.emit(newValue);

  }

}
