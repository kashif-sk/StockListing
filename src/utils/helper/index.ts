import {Defined, NonEmptyArray, NonEmptyString} from './types';

export function isNonNil<T>(argument: T): argument is Defined<T> {
  return argument != null && argument !== undefined;
}

export function notEmptyString<T>(s: T): s is NonEmptyString<T> {
  return typeof s === 'string' && s?.trim() !== '';
}

export function isNonEmptyArray<A>(arr: Array<A>): arr is NonEmptyArray<A> {
  return arr.length > 0;
}
