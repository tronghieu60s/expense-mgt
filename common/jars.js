import { JARS } from 'constant/common';

export const baseJars = () => {
  const base = {};
  for (const key in JARS) {
    if (JARS.hasOwnProperty(key)) {
      base[key] = 0;
    }
  }
  return base;
};
