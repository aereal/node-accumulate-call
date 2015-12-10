/**
 * `accumulateUntil` creates a new function calls given function `f` that takes a array of buffered arguments and called at least every `untilGap` milliseconds.
 */
export declare function accumulateUntil<T>(f: (buffer: T[]) => void, untilGap: number): (t: T) => void;
