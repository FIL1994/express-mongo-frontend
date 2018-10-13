import { parse } from "date-fns/esm";

export const MONGOOSE_FORMAT = "YYYY-MM-DDThh:mm:ssZ";

export const parseDate = date => {
  if (date === undefined) {
    throw new Error("date is undefined");
  }

  return parse(
    date
      .split(".", 1)[0]
      .replace("T", " ")
      .concat(" +00"),
    "yyyy-MM-dd HH:mm:ss x",
    new Date()
  );
};
