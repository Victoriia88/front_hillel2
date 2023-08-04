function findDates(input) {
  const dateRegex = /\b(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])\b/g;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const matches = input.match(dateRegex);
  if (!matches) return [];

  const result = matches.map((match) => {
    const [year, month, day] = match.split("-").map(Number);
    return {
      day,
      month,
      monthName: months[month - 1],
      year,
    };
  });

  return result;
}

const str =
  "The dates between 1976-03-12, and 1983-10-14, the code was 2004-67-12 and possible invalid date 8765-11-34";
console.log(findDates(str));
