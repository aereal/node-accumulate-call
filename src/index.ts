export function accumulateUntil<T>(f: (buffer: T[]) => void, untilGap: number): (t: T) => void {
  let buffer: T[] = [];
  return (t: T): void => {
    buffer.push(t);
    setInterval(() => {
      if (buffer.length > 0) {
        f(buffer);
        buffer = [];
      }
    }, untilGap);
  };
}
