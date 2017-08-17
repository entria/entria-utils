// @flow
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
