import { Ctx } from "blitz"
import db, { ExpenseDeleteArgs } from "db"

type DeleteExpenseInput = Pick<ExpenseDeleteArgs, "where">

export default async function deleteExpense({ where }: DeleteExpenseInput, ctx: Ctx) {
  ctx.session.authorize()

  const expense = await db.expense.delete({ where })

  return expense
}
