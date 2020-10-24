import { parse, isDate, format } from 'date-fns';

export const getDateNow = () => {
  return format(new Date(), 'yyyy-MM-dd');
};

export const getDateNowAgo = (numberDate) => {
  const timeNow = new Date();
  return format(
    new Date(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate() - numberDate),
    'yyyy-MM-dd',
  );
};

export const formatDateMark = (localDate) => {
  return format(new Date(localDate), `dd/MM/yyyy`);
};

export const parseDateString = (value, originalValue) => {
  const dateReg = /^\d{4}([-])\d{2}\1\d{2}$/;
  const matchDate = String(originalValue).match(dateReg);
  if (!matchDate) return false;

  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, 'yyyy-MM-dd', new Date());

  return parsedDate;
};
