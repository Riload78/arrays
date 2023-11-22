import { describe, it, expect } from 'vitest'
import { Calculator } from '../index'

describe('Calculator', () => {
  it('Should be a function', () => {
    expect(Calculator).toBeTypeOf('function')
  })
  it('Should throe if param is undefined', () => {
    expect(() => Calculator()).toThrow()
  })
  it('First param should be a string', () => {
    expect(() => Calculator(1)).toThrow()
  })
  it('Should throw if param is not x + y', () => {
    expect(() => Calculator('x+y')).toThrow()
    expect(() => Calculator('123 - 2345')).toThrow()
  })
  // it('Should return', () => {
  //   expect(Calculator('1 + 2')).toEqual(['1', ' ', '+', ' ', '2'])
  // })
  it('Should return', () => {
    expect(Calculator('1 + 2')).toEqual(3)
    expect(Calculator('1 - 2')).toEqual(-1)
  })
})
