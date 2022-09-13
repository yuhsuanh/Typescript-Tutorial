//#region Extending and modifying existing types
/**
 * Pick
 *  只選要保留物件中的 properties
 */
type Person = {
  firstName: string;
  lastName: string;
  age: number
}
type PersonName = Pick<Person, 'firstName' | 'lastName'>;
// type PersonName = {
//   firstName: string;
//   lastName: string;
// }


/**
 * Omit
 *  只把 properties 去掉，適合用於 container(react) 的情境
 */
 interface UserProps {
  username: string;
  password: string;
  isAuth: boolean;
}
type AuthedUserProps = Omit<UserProps, 'isAuth'>
// type AuthedUserProps = {
//   username: string;
//   password: string;
// }


/**
 * Partial
 *  interface的每個property都變成optional，適合用於options之類的情境
 *  (幫你複製一份 Type, 把裡面的 properties 設為 optional)
 */
interface SquareSpecs {
  width: number | string;
  color: string
}
type SquareSpecsOptions = Partial<SquareSpecs>
// type SquareSpecsOptions = {
//   width?: number | string;
//   color?: string;
// }

interface Query<TProp> {
  sort?: 'asc' | 'desc';
  matches(val: TProp): boolean;
}

type SquareSpecOptions = {
  [TProp in keyof SquareSpecs]?: Query<SquareSpecs[TProp]>
}
// type SquareSpecOptions = {
//   width?: Query<string | number>;
//   color?: Query<string>;
// }






/**
 * Required
 *  與 Partial 相反，複製一份，properties 設為 required
 */
 interface Baby {
  id?: number;
  name?: string;
  weight?: number;
}
type BabyRequired = Required<Baby>
// type BabyRequired = {
//   id: number;
//   name: string;
//   weight: number;
// }

/* type的交集，差集 */
/**
 * Extract
 *  從type中只拿出想要的
 */
 type Width = number | string | (() => number | string)
 type WidthStrType = Extract<Width, string>
//  type WidthStrType = string

 /**
  * Exclude
  *   從type中拿掉不要的
  */
type StaticWidth = Exclude<Width, Function>
// type StaticWidth = string | number


/**Others
 * RetureType<Type>
 * Parameters<Type>
 */
//#endregion Extending and modifying existing types


//#region Extracting metadata from existing

//#endregion Extracting metadata from existing

