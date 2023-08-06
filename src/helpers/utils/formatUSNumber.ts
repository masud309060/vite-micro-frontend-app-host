export const formatUSNumber = (number: number) => {
  if (number) {
    let cleaned = ("" + number).replace(/\D/g, "");
    let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      let intCode = match[1] ? "+1 " : "";
      return [intCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
    }
    // return number.replace(/[. \-+()]/g, "");
    return cleaned.replace(/[. \-+()]/g, "");
  }
  return number;
};
