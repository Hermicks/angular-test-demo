import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, empty, throwError } from 'rxjs';

xdescribe('Pruebas de MedicosComponent', () => {

    let component: MedicosComponent;
    const medicosService: MedicosService = new MedicosService(null);

    beforeEach( () => {
       component = new MedicosComponent(medicosService);
    });

    it('Init: Debe cargar los médicos', () => {
      const doctors = ['Médico1', 'Médico2', 'Médico3'];
      // Espía y le ordenamos lo que tiene que hacer en X método mandando un observable 'falso'
      spyOn(medicosService, 'getMedicos').and.callFake(() => {
        return from([doctors]);
      });
      // No se carga automáticamente el OnInit, por lo que tenemos que llamarlo manualmente
      component.ngOnInit();
      expect(component.medicos.length).toBeGreaterThanOrEqual(1);
    });
    it('Debe llamar al servidor para obtener un médico', () => {
      // Nos aseguramos de que se ejecuta una función
      const spy = spyOn(medicosService, 'agregarMedico').and.callFake(medico => {
        return empty();
      });
      component.agregarMedico();
      // Aseguramos que se haya llamado el espía
      expect(spy).toHaveBeenCalled();
    });
    it('Debe añadir un nuevo médico al array de médicos', () => {
      const doctor = { id: 1, nombre: 'Juan' };
      // Regresamos un Observable ya que la función que espiamos devuelve uno
      spyOn(medicosService, 'agregarMedico').and.returnValue(from([doctor]));
      component.agregarMedico();
      expect(component.medicos.indexOf(doctor)).toBeGreaterThanOrEqual(0);
    });
    it('Si falla la adición, la propiedad mensajeError debe ser igual que al error del servicio', () => {
      const miError = 'No se puedo agregar el médico';
      spyOn(medicosService, 'agregarMedico').and.returnValue(throwError(miError));
      component.agregarMedico();
      expect(component.mensajeError).toBe(miError);
    });
    it('Debe llamar al servidor para borrar un médico', () => {
      // Simulo la llamada a un evento
      spyOn(window, 'confirm').and.returnValue(true);
      const spy = spyOn(medicosService, 'borrarMedico').and.callFake((medico) => {
        return empty();
      });
      component.borrarMedico('1');
      expect(spy).toHaveBeenCalledWith('1');
    });
    it('NO Debe llamar al servidor para borrar un médico', () => {
      // Simulo la llamada a un evento
      spyOn(window, 'confirm').and.returnValue(false);
      const spy = spyOn(medicosService, 'borrarMedico').and.callFake((medico) => {
        return empty();
      });
      component.borrarMedico('1');
      expect(spy).not.toHaveBeenCalledWith('1');
    });

});
