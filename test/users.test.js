import { describe, it, expect } from 'vitest'
import { usersMapped } from '../index'

const john = { name: 'John', surname: 'Smith', id: 1 }
const pete = { name: 'Pete', surname: 'Hunt', id: 2 }
const mary = { name: 'Mary', surname: 'Key', id: 3 }

const users = [john, pete, mary]

describe('usersMapped', () => {
  it('should be a function', () => {
    expect(usersMapped).toBeTypeOf('function')
  })
  it('should be throw if param not array', () => {
    expect(() => usersMapped('aaa')).toThrow()
  })
  it('Should return', () => {
    expect(() => usersMapped(users)).toEqual([
      { fullName: 'John Smith', id: 1 },
      { fullName: 'Pete Hunt', id: 2 },
      { fullName: 'Mary Key', id: 3 }
    ])
  })
})
