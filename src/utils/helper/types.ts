export type Defined<T> = T extends undefined | null ? never : T;

export type NonEmptyString<T> = T extends string
  ? T extends ''
    ? never
    : T
  : never;

export type NonEmptyArray<T> = [T, ...T[]];
