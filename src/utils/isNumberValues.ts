export function isNumbersValues(...args: any[]) {
  for (let i = 0; i < args.length; i++) {
    if (isNaN(args[i])) {
      return false;
    }
  }

  return true;
}
