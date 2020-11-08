import { Transaction } from "@prisma/client"
import * as R from "ramda"

export const isPositive = R.gt(R.__, 0)
export const isNegative = R.lt(R.__, 0)

export const round = R.curry((decimalPlace: number, n: number): number => +n.toFixed(decimalPlace))

function sumAmountsIf(fn: (x: number) => boolean) {
  return R.pipe(
    R.map<Transaction, number>(R.prop("amount")),
    R.filter<number>(fn),
    R.sum,
    (number) => +number.toFixed(2)
  )
}

export const sumTotalIncome: (transactions: Transaction[]) => number = sumAmountsIf(isPositive)

export const sumTotalExpenses: (transactions: Transaction[]) => number = sumAmountsIf(isNegative)

export const sumAllAmounts: (transactions: Transaction[]) => number = sumAmountsIf(R.T)
