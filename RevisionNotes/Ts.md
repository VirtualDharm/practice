# Typescript     

Typescript allow developers to add type and visibility modifiers to JavaScript classes. It uses compile time type checking.
npx tsc: ts complier, converts ts into js code.
types:        
let firstName: string = "Dylan"; Explicit             
let firstName = "Dylan"; Implicit             
in tsconfig.json: noImplicitAny to not set anytype   
let v: any = true; & disabling type checking.
let w: unknown = 1;
let x: never = true;
let y: undefined = undefined;
let z: null = null;
These types don't have much use unless strictNullChecks is enabled in the tsconfig.json file.
const names: string[] = [];
names.push("Dylan");
const names: readonly string[] = ["Dylan"];
A tuple is a typed array with a pre-defined length and types for each index.
// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
Named tuples allow us to provide context for our values at each index.
const graph: [x: number, y: number] = [55.2, 41.3];
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};
Object optional property:
const car: { type: string, mileage?: number } = { // no error
  type: "Toyota"
};
car.mileage = 2000;
Index signatures can be used for objects without a defined list of properties.
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'
An enum is a special "class" that represents a group of constants (unchangeable variables).
Enums come in two flavors string and numeric.

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

enum CardinalDirections {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);

Type Aliases:
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

Type Interfaces: only apply to object types.
interface Rectangle {
  height: number,
  width: number
}
interface ColoredRectangle extends Rectangle {
  color: string
}
const rectangle: Rectangle = {
  height: 20,
  width: 10,
  color: "red"
};

Union types are used when a value can be more than a single type.
Such as when a property would be string or number.

function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');

function printHello(): void | number {
  console.log('Hello!');
}

Type casting:
let x: unknown = 'hello';
console.log((x as string).length);
console.log((<string>x).length);

Ex of visibiity in Ts:
class Person {
  public name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
console.log(person.getName());

baaki Typescript Classes ni samjh aata hai

TypeScript Basic Generics:
Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use, code reusablity.

function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
console.log(createPair<string, number>('hello', 42)); // ['hello', 42]

class Container<T> {
  constructor(private value: T) {}

  getValue(): T {
    return this.value;
  }
}
let numberContainer = new Container(42);
console.log(numberContainer.getValue()); // 42

type Wrapped<T> = { value: T };
const wrappedValue: Wrapped<number> = { value: 10 };

Extends:
Constraints can be added to generics to limit what's allowed. The constraints make it possible to rely on a more specific type when using the generic type.

function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
  console.log(`creating pair: v1='${v1}', v2='${v2}'`);
  return [v1, v2];
}

Partial changes all the properties in an object to be optional.
interface Point {
  x: number;
  y: number;
}
let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;

Required changes all the properties in an object to be required.
interface Car {
  make: string;
  model: string;
  mileage?: number;
}
let myCar: Required<Car> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000 // `Required` forces mileage to be defined
};

Record is a shortcut to defining an object type with a specific key type and value type.
const nameAgeMap: Record<string, number> = {
  'Alice': 21,
  'Bob': 25
};

Omit removes keys from an object type.
interface Person {
  name: string;
  age: number;
  location?: string;
}
const bob: Omit<Person, 'age' | 'location'> = {
  name: 'Bob'
  // `Omit` has removed age and location from the type and they can't be defined here
};

Pick removes all but the specified keys from an object type.
interface Person {
  name: string;
  age: number;
  location?: string;
}
const bob: Pick<Person, 'name'> = {
  name: 'Bob'
  // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};

Exclude removes types from a union.
type Primitive = string | number | boolean
const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.

ReturnType extracts the return type of a function type.
type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};

Parameters extracts the parameter types of a function type as an array.
type PointPrinter = (p: { x: number; y: number; }) => void;
const point: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};

keyof is a keyword in TypeScript which is used to extract the key type from an object type.
interface Person {
  name: string;
  age: number;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person: Person, property: keyof Person) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person = {
  name: "Max",
  age: 27
};
printPersonProperty(person, "name"); // Printing person property name: "Max"

keyof can also be used with index signatures to extract the index type.
type StringMap = { [key: string]: unknown };
// `keyof StringMap` resolves to `string` here
function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}

Nullish Coalescence: null handling
function getUserSettings(settings: { theme?: string, fontSize?: number }) {
  const theme = settings.theme ?? 'light';  // Default to 'light' theme if nullish
  const fontSize = settings.fontSize ?? 14; // Default to font size 14 if nullish
  console.log(`Theme: ${theme}, Font Size: ${fontSize}`);
}
getUserSettings({ theme: 'dark' });       // Prints 'Theme: dark, Font Size: 14'
getUserSettings({ fontSize: 18 });        // Prints 'Theme: light, Font Size: 18'
getUserSettings({ theme: null });         // Prints 'Theme: light, Font Size: 14'
getUserSettings({});                      // Prints 'Theme: light, Font Size: 14'

Null Assertion:
function getValue(): string | undefined {
  return 'hello';
}
let value = getValue();
console.log('value length: ' + value!.length); //5

let array: number[] = [1, 2, 3];
let value = array[0]; // with `noUncheckedIndexedAccess` this has the type `number | undefined`

Definitely Typed is a community-maintained project that provides TypeScript definitions for untyped NPM packages, ensuring type safety.

npm install --save-dev @types/jquery

Interface vs Type
Interface: Use interfaces when defining objects, especially when you expect objects to have a consistent shape that could benefit from inheritance or future extension.
interface User {
  id: number;
  name: string;
  email: string;
}
Type: Use types for unions or creating more complex data structures where you don’t need extension.
type Status = "active" | "inactive" | "pending";

Prefer unknown Over any

use readonly to not change data once intialized //Partial, Pick, Omit, Readonly
interface Product {
  readonly id: number;
  price: number;
}

optional chaining (?.) and nullish coalescing (??)
const userName = user?.profile?.name ?? "Guest";

Enums in TypeScript allow you to define a set of named constants. 
enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}
function assignRole(role: UserRole) {}

