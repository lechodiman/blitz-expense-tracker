import { Ctx } from "blitz"
import db, { FindManyTransactionArgs } from "db"

type GetUserTransactionsInput = Pick<FindManyTransactionArgs, "where" | "orderBy" | "skip" | "take">

export default async function getUserTransactions(
  { where, orderBy, skip = 0, take }: GetUserTransactionsInput,
  ctx: Ctx
) {
  ctx.session.authorize()

  const transactions = await db.transaction.findMany({
    where: { ...where, userId: ctx.session.userId },
    orderBy,
    take,
    skip,
  })

  const count = await db.transaction.count()
  const hasMore = typeof take === "number" ? skip + take < count : false
  const nextPage = hasMore ? { take, skip: skip + take! } : null

  return {
    transactions,
    nextPage,
    hasMore,
    count,
  }
}
