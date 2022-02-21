import React from 'react';
import { Box, CodePane, Notes, Slide } from 'spectacle';

export const TypeGenerics: React.FunctionComponent = () => {
  return <Slide backgroundColor={'white'}>
    <Box>
      <CodePane language={'typescript'} highlightRanges={[[2,6],[8,10],12,13,[16,18],20,21]}>
        {`
          //Generics allow a user to pass a parameter to a type
          type FullObj = {
            a: string,
            b: number
          };
          type PartialObj = Partial<FullObj>; //Properties a and b are now optional in PartialObj
          // Generics in Functions
          function justReturn<T>(a: T): T {
            return a;
          }

          justReturn(1); //returns type number
          justReturn('b'); //returns type string

          // Generics in a Class
          class MyClass<TId> {
            constructor(public id: TId) {}
          }

          const myNumberIdObject = new MyClass<number>(1); //myNumberIdObject.id is a number
          const myStringIdObject = new MyClass<string>('id'); //myStringIdObject.id is a string
        `}
      </CodePane>
    </Box>
    <Notes>
      Generics are a way to pass parameters to a type.  They promote reusability and extension of types.  I'm going to cover the basics here, but generics, just like in any language, are
      extremely powerful.  
      First is an example of a built in type, Partial.  We have a type alias, FullObj with 2 properties.  If we wanted to create an value with this type it must be an object with these two properties as numbers.  However, what
      if we are in a situation where we might not have both? We can use the Partial type and pass our alias to return a new type.  PartialObj now has both a and b in it, however, it would be equivalent to adding questions marks to each
      property definition which allows undefined.
      Next we have generics in functions.  We have a function here that returns the argument given.  This important part is what is happening in the type signature.  justReturn takes a type parameter, called T.  The argument a is of that type
      and our function returns that type.  Below, on line 13, we can see that we pass a number in, therefore T is now number and this function will return type number.  However, line 14 takes a string, meaning T is string in this instance and it
      returns string.  This is a pretty basic example, however, you might be able to see how we can build abstract types that can be reused across our application.  Generics like this are commonly used in React programs.
      Lastly, we can do the same thing with a class definition.  In this scenario we are declaring a class with a type parameter named TId.  We defined a private field, id, with that type.  So on line 21 we can have a class definition
      with an id of type number, or below of type string.  We don't need to create two different classes for this flexibility.
      As mentioned, generics can get very complex and dynamic.  For the purpose of this talk, we are going to utilize some React types and I just want you to be able to tell what is happening.  There is a ton more to 
      read and learn on in this area though.
    </Notes> 
  </Slide>;
}