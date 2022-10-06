export const tutorialUrl =
  "https://www.totaltypescript.com/tips/use-extends-keyword-to-narrow-the-value-of-a-generic";

export const getDeepValue = <
  Obj,
  FirstKey extends keyof Obj,
  SecondKey extends keyof Obj[FirstKey]
>(
  obj: Obj,
  firstKey: FirstKey,
  secondKey: SecondKey
): Obj[FirstKey][SecondKey] => {
  return obj[firstKey][secondKey];
};

const obj = {
  foo: {
    a: true,
    b: 2,
  },
  bar: {
    c: "cool",
    d: 2,
  },
};

export const result = getDeepValue(obj, "foo", "a");
