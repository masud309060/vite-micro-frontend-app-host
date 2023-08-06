const toCapitalize = (value: string) => {
  const convertedStr = value.replace(/^\w/, (value) => {
    return value.toUpperCase();
  });

  return convertedStr;
};

export default toCapitalize;
