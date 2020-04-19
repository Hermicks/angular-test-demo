import { ROUTES } from './app.routes';
import { DoctorComponent } from '../../intermediate2/doctor/doctor.component';

describe('Rutas principales', () => {

  it('Debe existir la ruta /doctor/:id', () => {
    expect(ROUTES).toContain(
      { path: 'doctor/:id',  component: DoctorComponent }
    );
  });
});
