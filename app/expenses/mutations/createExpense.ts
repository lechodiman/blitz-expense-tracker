import { Ctx } from "blitz"
import db, { ExpenseCreateArgs } from "db"

type CreateExpenseInput = Pick<ExpenseCreateArgs, "data">
export default async function createExpense({ data }: CreateExpenseInput, ctx: Ctx) {
  ctx.session.authorize()

  const expense = await db.expense.create({ data })

  return expense
}
