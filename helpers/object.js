export const objectKeyToArray = (object) => {
  const objectArr = [];
  for (const key in object) if (object.hasOwnProperty(key)) objectArr.push(key);
  return objectArr;
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
