export const getTextCapitalized = (str: string) =>
  str.toLowerCase().replace(/(?:^|\s|["'([{])+\S/g, (match) => match.toUpperCase());
