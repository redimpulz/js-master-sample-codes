// Moment.js
moment("2019-01-25").format("MM/DD/yyyy");
moment().subtract(7, "year").format("MM/DD/YYYY");
// const now = moment();
// now.subtract(7, "year").format("MM/DD/YYYY");

// date-fns
import { format, parseISO, subYears } from "https://esm.run/date-fns";
// const { format, parseISO, subYears } = await import("https://esm.run/date-fns");
format(parseISO("2019-01-25"), "MM/dd/yyyy");
format(subYears(new Date(), 7), "MM/dd/yyyy");

// Day.js
dayjs("2019-01-25").format("MM/DD/YYYY");
dayjs().subtract(7, "year").format("MM/DD/YYYY");
// const now = dayjs();
// now.subtract(7, "year").format("MM/DD/YYYY");
