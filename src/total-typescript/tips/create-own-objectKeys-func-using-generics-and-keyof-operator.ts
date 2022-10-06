export const tutorialUrl =
  "https://www.totaltypescript.com/tips/create-your-own-objectkeys-function-using-generics-and-the-keyof-operator";

export const myObject = {
  a: 1,
  b: 2,
  c: 3,
};

/* TO NIE SPECJALNIE DZIALA, TRZEBA ROZKMINIC JESZCZE RAZ */
export const objectKeys = <Obj>(obj: Obj): (keyof Obj)[] => {
  return Object.keys(obj) as (keyof Obj)[];
};

objectKeys(obj).forEach((key) => {
  console.log(myObject[key]);
});

// Object.keys(myObject).forEach((key) => {
//   console.log(myObject[key]);
// });
