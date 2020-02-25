// Exportamos la función para poder usarla en otros componentes, como por ejemplo en su spec
export function message(nombre: string): string {
  return `Saludos ${ nombre }!!!!`;
}
