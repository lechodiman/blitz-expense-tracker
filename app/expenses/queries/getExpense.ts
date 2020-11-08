import { Ctx, NotFoundError } from "blitz"
import db, { FindFirstExpenseArgs } from "db"

type GetExpenseInput = Pick<FindFirstExpenseArgs, "where">

export default async function getExpense({ where }: GetExpenseInput, ctx: Ctx) {
  ctx.session.authorize()

  const expense = await db.expense.findFirst({ where })

  if (!expense) throw new NotFoundError()

  return expense
}
