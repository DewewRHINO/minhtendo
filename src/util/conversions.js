//  seconds to MM/DD/YY
export const toMMDDYY = (epochSeconds) => {
  const date = new Date(epochSeconds * 1000);
  const formattedDate = `${date.getMonth()}/${date.getDate()}/${date
    .getFullYear()
    .toString()
    .slice(-2)}`;
  return formattedDate;
};
