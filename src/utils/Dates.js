// @flow
import fnsIsValid from 'date-fns/is_valid';
import fnsIsFuture from 'date-fns/is_future';
import fnsIsPast from 'date-fns/is_past';
import fnsCompareAsc from 'date-fns/compare_asc';

import * as Locale from './Locale';

type PossibleDate = Date | string;

type GeneralConfig = {
  locale?: string,
};
const sanitizeConfig = (config: GeneralConfig): GeneralConfig => {
  const sanitizedConfig = { ...config };

  if (!sanitizedConfig.locale) {
    sanitizedConfig.locale = Locale.get();
  }

  return sanitizedConfig;
};

type ExtractedDate = {
  day: number,
  month: number,
  year: number,
};
export function extract(value: Date | string, config: GeneralConfig = {}): ExtractedDate {
  const sanitizedConfig = sanitizeConfig(config);
  const valueString = typeof value === 'object' ? value.toISOString() : value;

  // brazil = dd/mm/yyyy
  if (sanitizedConfig.locale === Locale.BRAZIL) {
    return {
      day: parseInt(valueString.substr(0, 2), 10),
      month: parseInt(valueString.substr(3, 2), 10),
      year: parseInt(valueString.substr(6, 4), 10),
    };
  }

  // general = yyyy-mm-dd
  return {
    day: parseInt(valueString.substr(8, 2), 10),
    month: parseInt(valueString.substr(5, 2), 10),
    year: parseInt(valueString.substr(0, 4), 10),
  };
}

export function parse(value: PossibleDate, config: GeneralConfig = {}): Date {
  if (value && typeof value === 'string') {
    const { day, month, year } = extract(value, config);
    return new Date(year, month - 1, day);
  }

  return new Date(value);
}

export function isValid(date: PossibleDate, config: GeneralConfig = {}): boolean {
  const isValidFns = fnsIsValid(parse(date, config));

  const { day, month, year } = extract(date, config);
  const toCompare = new Date(year, parseInt(month - 1, 10), day, 0, 0, 0, 0);
  const dayMatches = toCompare.getDate() === parseInt(day, 10);
  const monthMatches = toCompare.getMonth() + 1 === parseInt(month, 10);
  const yearMatches = toCompare.getFullYear() === parseInt(year, 10);

  return isValidFns && dayMatches && monthMatches && yearMatches;
}

export function isFuture(date: PossibleDate, config: GeneralConfig = {}): boolean {
  return fnsIsFuture(parse(date, config));
}

export function isPast(date: PossibleDate, config: GeneralConfig = {}): boolean {
  return fnsIsPast(parse(date, config));
}

export function compare(dateLeft: PossibleDate, dateRight: PossibleDate, config: GeneralConfig = {}): number {
  return fnsCompareAsc(parse(dateLeft, config), parse(dateRight, config));
}

export function isEmpty(date: PossibleDate, config: GeneralConfig = {}): boolean {
  return date === undefined || date === null || !fnsIsValid(parse(date, config));
}
