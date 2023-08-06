const convertNumber = (numOrStr: number | string) => {
  return typeof numOrStr === "number" ? numOrStr : +numOrStr;
};
export default convertNumber;
