import { Ctx } from "blitz"
import db, { FindManyExpenseArgs } from "db"

type GetExpensesInput = Pick<FindManyExpenseArgs, "where" | "orderBy" | "skip" | "take">

export default async function getExpenses(
  { where, orderBy, skip = 0, take }: GetExpensesInput,
  ctx: Ctx
) {
  ctx.session.authorize()

  const expenses = await db.expense.findMany({
    where,
    orderBy,
    take,
    skip,
  })

  const count = await db.expense.count()
  const hasMore = typeof take === "number" ? skip + take < count : false
  const nextPage = hasMore ? { take, skip: skip + take! } : null

  return {
    expenses,
    nextPage,
    hasMore,
    count,
  }
}
