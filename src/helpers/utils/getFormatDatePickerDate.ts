import { format } from "date-fns";

const getFormatDataPickerDate = (startDate: Date | number, endDate: Date | number) => {
  const fromDate = format(startDate, "MMM dd, yyyy");
  const toDate = format(endDate, "MMM dd, yyyy");

  return [fromDate, toDate];
};

export default getFormatDataPickerDate;
