import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgxPrintModule} from 'ngx-print';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { BarSimuladoComponent } from './bar-simulado/bar-simulado.component';
import { PositionComponent } from './position/position.component';
import { SimuladoService } from './simulado.service';
import { ResultadoService } from './resultado.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BarSimuladoComponent,
    PositionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPrintModule,
  ],
  providers: [
    SimuladoService,
    ResultadoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }