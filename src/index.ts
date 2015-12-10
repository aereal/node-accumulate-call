export function bufferedApply<T>(f: (buffer: T[]) => void, wait: number): (t: T) => void {
  let buffer: T[] = [];
  return (t: T): void => {
    buffer.push(t);
    setInterval(() => {
      if (buffer.length > 0) {
        f(buffer);
        buffer = [];
      }
    }, wait);
  };
}
