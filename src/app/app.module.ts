import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermediate/spies/medicos.component';
import { DoctorComponent } from './intermediate2/doctor/doctor.component';
import { HospitalComponent } from './intermediate2/hospital/hospital.component';
import { IncrementadorComponent } from './intermediate2/incrementador/incrementador.component';
import { RouterModule } from '@angular/router';

// Rutas de navegación
import { ROUTES } from './advanced/routes/app.routes';
import { NavbarComponent } from './advanced/navbar/navbar.component';
import { RouterMedicoComponent } from './advanced/router-medico/router-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    DoctorComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterMedicoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
