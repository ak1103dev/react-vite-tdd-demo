import { add, mul, fact } from './calculate'

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3)
  })
})

describe('mul', () => {
  it('should subtract two numbers', () => {
    expect(mul(3, 4)).toBe(12)
  })
})

describe('fact', () => {
  it('should return 1 when fact(1)', () => {
    expect(fact(1)).toBe(1)
  })

  it('should return 120 when fact(5)', () => {
    expect(fact(5)).toBe(120)
  })
})
