import { generatorOptions } from "./interface";
import * as data from "./data";

export const getPossible = (options?: generatorOptions): string => {
  if (typeof options === "undefined") return data.lowercaseLetters;

  let possible: string = '';

  if (options?.lowercaseLetters) possible += data?.lowercaseLetters;
  if (options?.uppercaseLetters) possible += data?.uppercaseLetters;
  if (options?.numbers) possible += data?.numbers;
  if (options?.specialSymbols) possible += data?.specialSymbols;
  
  return possible;
};
