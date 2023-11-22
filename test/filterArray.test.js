import { describe, it, expect } from 'vitest'
import { filterRange, filterRangeFilter, filterRangeInPlace, orderArr } from '../index'

describe('filterArr', () => {
  it('should be a function', () => {
    expect(filterRange).toBeTypeOf('function')
  })
  it('Trhow if first param missing', () => {
    expect(() => filterRange()).toThrow()
  })
  it('Firsrt param Should be an arraa', () => {
    expect(() => filterRange(111)).toThrow()
  })
  it('throw error if second param is missing', () => {
    expect(() => filterRange([1, 2, 3])).toThrow()
  })
  it('Second param must be a number', () => {
    expect(() => filterRange([1, 2, 3], 'aaa')).toThrow()
  })
  it('throw error if param 3 is missing', () => {
    expect(() => filterRange([1, 2, 3], 1)).toThrow()
  })
  it('3 param must be a number', () => {
    expect(() => filterRange([1, 2, 3], 1, 'aaa')).toThrow()
  })
  it('Should return an array', () => {
    expect(filterRange([5, 3, 8, 1], 1, 4)).toEqual([3, 1])
  })
})

describe('filterRangeFilter', () => {
  it('should be a function', () => {
    expect(filterRangeFilter).toBeTypeOf('function')
  })
  it('Trhow if first param missing', () => {
    expect(() => filterRangeFilter()).toThrow()
  })
  it('Firsrt param Should be an arraa', () => {
    expect(() => filterRangeFilter(111)).toThrow()
  })
  it('throw error if second param is missing', () => {
    expect(() => filterRangeFilter([1, 2, 3])).toThrow()
  })
  it('Second param must be a number', () => {
    expect(() => filterRangeFilter([1, 2, 3], 'aaa')).toThrow()
  })
  it('throw error if param 3 is missing', () => {
    expect(() => filterRangeFilter([1, 2, 3], 1)).toThrow()
  })
  it('3 param must be a number', () => {
    expect(() => filterRangeFilter([1, 2, 3], 1, 'aaa')).toThrow()
  })
  it('Should return an array', () => {
    expect(filterRangeFilter([5, 3, 8, 1], 1, 4)).toEqual([3, 1])
  })
})

describe('filterRangeInPlace', () => {
  it('should be a function', () => {
    expect(filterRangeInPlace).toBeTypeOf('function')
  })
  it('Trhow if first param missing', () => {
    expect(() => filterRangeInPlace()).toThrow()
  })
  it('Firsrt param Should be an arraa', () => {
    expect(() => filterRangeInPlace(111)).toThrow()
  })
  it('throw error if second param is missing', () => {
    expect(() => filterRangeInPlace([1, 2, 3])).toThrow()
  })
  it('Second param must be a number', () => {
    expect(() => filterRangeInPlace([1, 2, 3], 'aaa')).toThrow()
  })
  it('throw error if param 3 is missing', () => {
    expect(() => filterRangeInPlace([1, 2, 3], 1)).toThrow()
  })
  it('3 param must be a number', () => {
    expect(() => filterRangeInPlace([1, 2, 3], 1, 'aaa')).toThrow()
  })
  it('Should return an array', () => {
    expect(filterRangeInPlace([5, 3, 8, 1], 1, 4)).toEqual([3, 1])
  })
})

describe('orderArr', () => {
  it('should be a function', () => {
    expect(orderArr).toBeTypeOf('function')
  })
  it('Trhow if first param missing', () => {
    expect(() => orderArr()).toThrow()
  })
  it('Firsrt param Should be an arraa', () => {
    expect(() => orderArr(111)).toThrow()
  })
  it('Should return an array', () => {
    expect(orderArr([5, 2, 1, -10, 8])).toEqual([8, 5, 2, 1, -10])
  })
})
