import { Component, OnInit, Input } from '@angular/core';
import { ResultadoService } from '../resultado.service';

@Component({
  selector: 'position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  @Input('parentData') public filtros;

  resultados: any;
  rfiltrado: any;

  constructor(service: ResultadoService) {
    this.resultados = service.getResultados();
  }

  ngOnChanges() {
    this.alterarFiltros();
  }

  ngOnInit() {
    this.alterarFiltros();
  }

  alterarFiltros(){
    if (!this.filtros[0] && !this.filtros[1] && !this.filtros[2]) {
      this.rfiltrado = this.resultados;
    }
    else if(!this.filtros[1] && !this.filtros[2]) {
      this.rfiltrado =  this.resultados.filter(x => x.especialidade == this.filtros[0]);
    }
    else if(!this.filtros[0] && !this.filtros[2]) {
      this.rfiltrado =  this.resultados.filter(x => x.turma == this.filtros[1]);
    }
    else if(!this.filtros[0] && !this.filtros[1]) {
      this.rfiltrado =  this.resultados.filter(x => x.filial == this.filtros[2]);
    }
    else if(!this.filtros[0]){
      this.rfiltrado =  this.resultados.filter(x => x.turma == this.filtros[1]).filter(x => x.filial == this.filtros[2]);
    }
    else if(!this.filtros[1]){
      this.rfiltrado =  this.resultados.filter(x => x.especialidade == this.filtros[0]).filter(x => x.filial == this.filtros[2]);
    }
    else if(!this.filtros[2]){
      this.rfiltrado =  this.resultados.filter(x => x.especialidade == this.filtros[0]).filter(x => x.turma == this.filtros[1]);
    }
    else {
      this.rfiltrado =  this.resultados.filter(x => x.especialidade == this.filtros[0]).filter(x => x.turma == this.filtros[1]).filter(x => x.filial == this.filtros[2]);
    }
    this.rfiltrado.sort(function (a, b) { return b.nota - a.nota });
  }

}