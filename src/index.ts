import { getPossible } from "../lib/helpers";
import { generatorOptions } from "../lib/interface";

export default (length: number, options?: generatorOptions): string => {
  let text: string = '';
  let possible: string = getPossible(options);

  for (let i: number = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
