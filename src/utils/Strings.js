// @flow
export const isEmpty = (value: string): boolean => value === undefined || value === null || value === '';

export const isAlpha = (value: string): boolean => /^[a-zA-ZÁÉÍÓÚáéíóúÃÕãõçÇ ]+$/.test(value);

export const isEmail = (value: string): boolean => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

export const uppercaseFirstLetter = (text: string): string => `${text.charAt(0).toUpperCase()}${text.slice(1)}`;

export const capitalize = (text: string): string =>
  text.toLowerCase().split(' ').map(word => uppercaseFirstLetter(word)).join(' ');

export const numbers = (value: string): string => value.replace(/\D/g, '');
