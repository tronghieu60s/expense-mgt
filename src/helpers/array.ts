export const arrayTotal = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i += 1) total += arr[i];
  return total;
};

export const arrayUniqueValue = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) if (!newArr.includes(arr[i])) newArr.push(arr[i]);
  return newArr;
};

export const arraySubtract2Arr = (arr1, arr2) => {
  const newArr = [];
  for (let i = 0; i < arr1.length; i += 1) newArr.push(arr1[i] - arr2[i]);
  return newArr;
};

export const arrSortObjectDate = (arr) => {
  return arr.slice().sort((a, b) => {
    const date1: Date = new Date(a.date);
    const date2: Date = new Date(b.date);
    return date1.getTime() - date2.getTime();
  });
};
