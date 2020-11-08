import { Ctx } from "blitz"
import db, { ExpenseUpdateArgs } from "db"

type UpdateExpenseInput = Pick<ExpenseUpdateArgs, "where" | "data">

export default async function updateExpense({ where, data }: UpdateExpenseInput, ctx: Ctx) {
  ctx.session.authorize()

  const expense = await db.expense.update({ where, data })

  return expense
}
