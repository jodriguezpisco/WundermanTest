import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsumoServiciosComponent } from './consumo-servicios/consumo-servicios.component';
import { WudermanTestService } from './consumo-servicios/wuderman-test.service';


@NgModule({
  declarations: [
    AppComponent,
    ConsumoServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [WudermanTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
