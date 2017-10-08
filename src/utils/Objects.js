// @flow
export const concat = (objectOne: Object, objectTwo: Object): Object => {
  const concatenated = {
    ...objectOne,
  };

  Object.keys(objectTwo).forEach(key => {
    if (typeof concatenated[key] === 'object') {
      concatenated[key] = {
        ...concatenated[key],
        ...objectTwo[key],
      };
    } else {
      concatenated[key] = objectTwo[key];
    }
  });

  return concatenated;
};

export const clear = (dirtyObject: Object): Object => {
  const hasValue = (value: any): boolean => {
    if (
      value === undefined ||
      value === null ||
      value.length === 0 ||
      (typeof value === typeof {} && Object.keys(value).length === 0)
    ) {
      return false;
    }

    return true;
  };

  return Object.keys(dirtyObject)
    .filter(key => hasValue(dirtyObject[key]))
    .reduce((acc, key) => ({
      ...acc,
      [key]: dirtyObject[key],
    }), {});
};

export const isEmpty = (value: Object): boolean => value === undefined || value === null || Object.keys(value).length === 0;
