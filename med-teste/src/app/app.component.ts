import { Component } from '@angular/core';
import { ResultadoService } from './resultado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MedTeste';

  public onSimulator: any = 'Nenhum simulado selecionado';
  public onMark = false;

  public filtroEspecialidade = '';
  public filtroTurma = '';
  public filtroFilial = '';

  displayed;

  tfonte: number = 15;

  matrBusca;
  resulBusca: any = [];
  

  resultados: { id: number; nota: number; matricula: number; especialidade: string; turma: string; filial: string; }[];

  constructor(service: ResultadoService) {
    this.resultados = service.getResultados();
  }

  buscaMatr() {
    this.resulBusca = this.resultados.filter(m => m.matricula == this.matrBusca).map(m => m.nota);
  }

  attEspecialidade(event: any){
    this.filtroEspecialidade = event.target.value;
  }

  attTurma(event: any){
    this.filtroTurma = event.target.value;
  }

  attFilial(event: any){
    this.filtroFilial = event.target.value;
  }

  fonteMaior() {
    this.tfonte = this.tfonte + 1;
  }

  fonteMenor() {
    this.tfonte = this.tfonte - 1;
  }

}