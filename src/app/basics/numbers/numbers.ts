export function increase(number: number): number {
  if (number > 100) {
    return 100;
  } else {
    return number + 1;
  }
}
