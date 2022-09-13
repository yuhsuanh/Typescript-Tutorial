/**
 * Example 1 : Combining multiple types with union types
 */
interface Person {
  name: string;
  birthDate?: PersonBirthDate;
}
type PersonBirthDate = Date | string | number;
interface Address {
  address: string;
}
type addressablePerson = Person & Address;
const personWithAddress: addressablePerson = {
  name: "Sean",
  address: "116 Greville st."
}


/**
 * Example 2 : Keyof operator
 */
type personFields = keyof Person;
function getValue<T, U extends keyof T>(source: T, propertyName: U) {
  return source[propertyName];
}

// const value = getValue(personWithAddress, "adderss"); //ERROR: because address not a key of Person
const value = getValue(personWithAddress, "name");


/**
 * Example 3 : Typeof operator
 */
function toPerson(nameOrPerson: string | Person): Person {
  if(typeof nameOrPerson === "object") {
    return {
      name: nameOrPerson.name,
    }
  }
  else {
    return {
      name: nameOrPerson
    }
  }
}


/**
 * Example 4 : Indexed access types
 */
type Awesome = Person["name"];

interface PersonEvent {
  personName: Person["name"]
}



/**
 * Example 5 : Defining dynamic but limited types
 */
