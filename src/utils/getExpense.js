export function getExpense(transactions)
{
    return parseFloat(transactions.filter((item)=>item.amount<0).reduce((acc, item)=>parseFloat(item.amount)+acc,0));
}