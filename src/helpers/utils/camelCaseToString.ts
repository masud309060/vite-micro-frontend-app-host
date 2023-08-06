const camelCaseToString = (value: string) => {
  const convertedStr = value.replace(/^\w|[A-Z]/g, (value, index) => {
    if (index > 0) return ` ${value}`;
    return value.toUpperCase();
  });

  return convertedStr;
};

export default camelCaseToString;
