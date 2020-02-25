import { FormRegister } from './forms';
import { FormBuilder } from '@angular/forms';

xdescribe('Pruebas de Formularios', () => {
  let formRegister: FormRegister;

  beforeEach(() => {
    formRegister = new FormRegister(new FormBuilder());
  });

  it('Debe crear un formulario con dos campos: email y password', () => {
    expect(formRegister.form.contains('email')).toBeTruthy();
    expect(formRegister.form.contains('password')).toBeTruthy();
  });
  it('El email debe ser obligatorio', () => {
    const emailControl = formRegister.form.get('email');
    emailControl.setValue('pablo@gmail.com');
    expect(emailControl.valid).toBeTruthy();
  });
});
