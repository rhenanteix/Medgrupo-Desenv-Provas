import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SimuladoService } from '../simulado.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  simulados = [];

  sim = '';
  markActive = false;

  @Output() public onSimulator = new EventEmitter();
  @Output() public onMark = new EventEmitter();

  constructor(service: SimuladoService) {
    this.simulados = service.getSimulados();
  }

  enviarDado(tipo, dado) {
    this.markActive = true;

    if (tipo == 1) {
      this.sim = 'SIMULADO ' + dado + ' - PROVA OBJETIVA';
    } else if (tipo == 2) {
      this.sim = 'SIMULADO ' + dado + ' - PROVA FINAL';
    } else {
      this.sim = 'NENHUM SIMULADO SELECIONADO';
    }

    this.onSimulator.emit(this.sim);
    this.onMark.emit(this.markActive);
  }

  ngOnInit() {
  }

}