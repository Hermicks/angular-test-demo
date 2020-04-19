import { Routes } from '@angular/router';
import { HospitalComponent } from '../../intermediate2/hospital/hospital.component';
import { DoctorComponent } from '../../intermediate2/doctor/doctor.component';
import { IncrementadorComponent } from '../../intermediate2/incrementador/incrementador.component';

export const ROUTES: Routes = [
  { path: 'hospital',  component: HospitalComponent },
  { path: 'doctor/:id',  component: DoctorComponent },
  { path: '**',  component: IncrementadorComponent }
];
