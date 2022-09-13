/**
 * Example 1 : primitives and built-in types
 */
let x: number;
let y: string;
let z: boolean;
let a: Date;
let b: string[];

// ERROR Sample
// b = "hello!";
// b = 123;


/**
 * Example 2 : sustom types with interfaces
 */
interface Contact extends Address {
  id: number;
  name: string;
  birthDate?: Date;
}
interface Address {
  line1: string;
  line2?: string;
  province: string;
  city: string;
  postalCode: string;
}
let primaryContact: Contact = {
  id: 1,
  name: "Sean",
  // birthDate: new Date("2000/01/01")
  line1: "74 Holmes Ave.",
  // line2: "suit 2"
  province: "ON",
  city: "Toronto",
  postalCode: "A1A 1A1"
};


/**
 * Example 3 : type aliases
 */
interface Person {
  name: PersonName;
}
interface Student {
  name: string;
}
type PersonName = string;


/**
 * Example 4 : enumerable types
 */
interface Item {
  uid: number,
  status: ItemStatus
}
enum ItemStatus {
  Active = "active",
  Inactive = "inactive"
}
let itemA: Item = {
  uid: 1234567890,
  status: ItemStatus.Active
}


/**
 * Example 5 : functions
 */
function clone(source: Item): Item {
  return Object.apply({}, source);
}
const itemB = clone(itemA);


/**
 * Example 6 : Defining a metatype using generics
 */
function copy<T>(source: T): T {
  return Object.apply({}, source);
}
const itemC = copy(itemB);
const contactCopy = copy(primaryContact);
const myName = copy("Sean");

interface Camera {
  model: string;
}
interface Nikon {
  model: string;
  pixel: number
}
function cloneCamera<T1, T2 extends T1>(source: T1): T2 {
  return Object.apply({}, source);
}

const myCamera: Camera = { model: "Z7" };
const cloneNikonZ7 = cloneCamera<Camera, Nikon>(myCamera);