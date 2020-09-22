export const objectKeyToArray = (object) => {
  const objectArr = [];
  for (const key in object) if (object.hasOwnProperty(key)) objectArr.push(key);
  return objectArr;
};

export const objectKeyNameCodeToArray = (object) => {
  const arr = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      arr.push({ ...object[key], nameCode: key });
    }
  }
  return arr;
};

export const objectToArray = (object) => {
  const objectArr = [];
  for (const key in object) if (object.hasOwnProperty(key)) objectArr.push(object[key]);
  return objectArr;
};

export const objectTotalValues = (object) => {
  let total = 0;
  for (const key in object) if (object.hasOwnProperty(key)) total += parseInt(object[key], 10);
  return total;
};

export const objectIsEqual = (objA, objB) => {
  const aProps = Object.getOwnPropertyNames(objA);
  const bProps = Object.getOwnPropertyNames(objB);
  if (aProps.length !== bProps.length) {
    return false;
  }

  for (let i = 0; i < aProps.length; i += 1) {
    const propName = aProps[i];
    if (objA[propName] !== objB[propName]) {
      return false;
    }
  }
  return true;
};
