export function concat(objectOne: Object, objectTwo: Object): Object {
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
}
