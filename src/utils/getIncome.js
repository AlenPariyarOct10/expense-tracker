export function getIncome(transactions) {
  return parseFloat(transactions
    .filter((item) => item.amount >= 1)
    .reduce((acc, item) => acc + parseFloat(item.amount), 0));
}
