import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AlmacenFacturacionComponent } from './almacen-facturacion/almacen-facturacion.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormularioComponent,
    FooterComponent,
    AlmacenFacturacionComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([

      { path: '', component: MainComponent },
      { path: 'almacen', component: AlmacenFacturacionComponent },

    ]),
    BrowserAnimationsModule,
    TabMenuModule,
    MenuModule,
    MenubarModule,
    PanelMenuModule,
    SidebarModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    MessagesModule,
    MessageModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    TableModule


  ],
  exports: [RouterModule],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
