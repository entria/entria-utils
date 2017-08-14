// @flow
const LOCAL_STORAGE_LOCALE = 'entria-utils-v1-locale';

export const GENERAL = 'GENERAL';
export const BRAZIL = 'BRAZIL';

export const set = (locale: string = GENERAL) => {
  localStorage.setItem(LOCAL_STORAGE_LOCALE, locale);
};

export const get = (): string => localStorage.getItem(LOCAL_STORAGE_LOCALE) || GENERAL;
