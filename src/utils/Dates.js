// @flow
import fnsIsValid from 'date-fns/is_valid';
import fnsIsFuture from 'date-fns/is_future';
import fnsIsPast from 'date-fns/is_past';
import fnsCompareAsc from 'date-fns/compare_asc';

import * as Locale from './Locale';

type ExtractedDate = {
  day: string,
  month: string,
  year: string,
};
export function extract(value: string, locale: string = Locale.get()): ExtractedDate {
  // brazil = dd/mm/yyyy
  if (locale === Locale.BRAZIL) {
    return {
      day: value.substr(0, 2),
      month: value.substr(3, 2),
      year: value.substr(6, 4),
    };
  }

  // general = yyyy-mm-dd
  return {
    day: value.substr(8, 2),
    month: value.substr(5, 2),
    year: value.substr(0, 4),
  };
}

export function parse(value: string | Date): Date {
  if (value && typeof value === 'string') {
    const { day, month, year } = extract(value);
    return new Date(year, parseInt(month, 10) - 1, day);
  }

  return new Date(value);
}

export function isValid(date: string | Date): boolean {
  const isValidFns = fnsIsValid(parse(date));

  const { day, month, year } = extract(date);
  const toCompare = new Date(year, parseInt(month - 1, 10), day, 0, 0, 0, 0);
  const dayMatches = toCompare.getDate() === parseInt(day, 10);
  const monthMatches = toCompare.getMonth() + 1 === parseInt(month, 10);
  const yearMatches = toCompare.getFullYear() === parseInt(year, 10);

  return isValidFns && dayMatches && monthMatches && yearMatches;
}

export function isFuture(date: string | Date): boolean {
  return fnsIsFuture(parse(date));
}

export function isPast(date: string | Date): boolean {
  return fnsIsPast(parse(date));
}

export function compare(dateLeft: string | Date, dateRight: string | Date): number {
  return fnsCompareAsc(parse(dateLeft), parse(dateRight));
}
