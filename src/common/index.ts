import { GROUPS, JARS, TYPES } from 'src/constant/common';
import * as TEXT from 'src/constant/text';
import { objectKeyNameCodeToArray } from 'src/helpers/object';

export const baseJars = () => {
  const base = {};
  for (const key in JARS) {
    if (JARS.hasOwnProperty(key)) {
      base[key] = 0;
    }
  }
  return base;
};

export const optionsRenderData = (arr) => {
  let result = null;
  result = arr.map((jar) => {
    return { key: jar.nameCode, value: jar.name };
  });
  result.unshift({ key: 'all', value: TEXT.ALL });
  return result;
};

// ArrTypesName
const arrTypesName = objectKeyNameCodeToArray(TYPES);
export const optionsTypes = () => optionsRenderData(arrTypesName);

// ArrJarsName
const arrJarsName = objectKeyNameCodeToArray(JARS);
export const optionsJars = () => optionsRenderData(arrJarsName);

// ArrGroupsName
const arrGroupsName = objectKeyNameCodeToArray(GROUPS);
export const optionsGroups = () => optionsRenderData(arrGroupsName);
