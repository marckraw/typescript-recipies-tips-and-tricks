export const fruitCounts = {
  apple: 1,
  pear: 4,
  banana: 26,
};

// manualnie napisany type
export type SingleFruitCount =
  | { apple: number }
  | { banana: number }
  | { pear: number };

export const singleFruitCount: SingleFruitCount = {
  apple: 2,
  banana: 10,
  pear: 20,
};

// dynamicznie napisany typ, "derived" from object
type FruitCounts = typeof fruitCounts;

// type DynamicFruitCount = {
//   [K in keyof FruitCounts]: {
//     dupa: string;
//     something: number;
//   };
// };

type DynamicFruitCount = {
  /* LOOP */
  [K in keyof FruitCounts]: {
    [K2 in K]: number;
  };
}[keyof FruitCounts];

export const dynamicFruitCount: DynamicFruitCount = {
  apple: 2,
  banana: 3,
  pear: 10,
};
