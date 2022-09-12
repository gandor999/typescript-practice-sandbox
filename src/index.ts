import { Person } from './interface'
import { Gender  } from './enum'

const geo: Person = {
  name: 'Geodor',
  age: 24,
  gender: Gender.Male
}

const jem: Person = {
  name: 'Jem',
  age: 23,
  gender: Gender.Female
}

console.log(geo)
console.log(jem)
