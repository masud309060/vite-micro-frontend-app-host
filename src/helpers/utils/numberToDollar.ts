const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const numberToDollar = (number: string | number) => {
  if (typeof number === "string") return formatter.format(+number);
  return formatter.format(number);
};

export default numberToDollar;
