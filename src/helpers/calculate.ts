export const add = (a: number, b: number): number => a + b
export const mul = (a: number, b: number): number => a * b
export const fact = (a: number): number => a === 1 ? 1 : a * fact(a - 1)