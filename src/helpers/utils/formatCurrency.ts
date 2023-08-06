function formatCurrency(n: number, currency = "") {
  if (typeof n !== "number") return 0;

  return (
    currency +
    n.toFixed(2).replace(/./g, function (c, i, a) {
      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    })
  );
}

export default formatCurrency;
