/* What is Decorators and Why are they helpful? */

/**
 * Example 1 : Creating a method decorator
 */
function authorize(target: any, property: string, descriptor: PropertyDecorator) {
  // return {
  //   //make any changes here
  // } as PropertyDecorator
  descriptor.value = function() {
    const wrapped = descriptor.value;

    if(!currentUser.isAuthenticated()) {
      throw Error("Uesr is not authenticated")
    }
    
    try{
      return wrapped.apply(this, arguments);
    } catch(ex) {
      throw ex;
    }

  }
}


/**
 * Example 2 : Creating decorator factories
 */



/**
 * Example 3 : Creating a class decorator
 */


/**
 * Example 4 : Creating a property decorator
 */