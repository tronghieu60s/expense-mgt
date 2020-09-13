export const getDateNow = () => {
  return new Date().toISOString().slice(0, 10);
};

export const formatDateMark = (localDate, mark) => {
  const date = new Date(localDate);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();
  day = day < 10 ? `0${day}` : day;
  month = month < 10 ? `0${month}` : month;

  return `${day}${mark}${month}${mark}${year}`;
};
