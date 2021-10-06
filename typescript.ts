//////// first////////

interface Id{
    id: number
}
interface Name {
    name: string
}
interface Bob {
    age:boolean
}
type an<T> = T extends Name? string: Bob
type IdOrName<T> = T extends Id ? number: an<T>

let ab :IdOrName<{nam: 'sfdf'}>
ab = {
    age: true
}

//////second//////

interface Entity {
  readonly id?: string;
  readonly name?: string;
  readonly age?: number;
  readonly ethnicity?: string;
}

type D<T> = {
     -readonly [Property in keyof Entity]: Entity[Property ] 
}

type C<T>= {
    [Property in keyof T]-?: T[Property]
}
type B<T> = {
    [Property in keyof T as Exclude<Property, "id" | "ethnicity">]: T[Property] 
}

type A<T> = {
    [Property in keyof T ]: boolean 
}

type newType = A<B<C<D<Entity>>>>