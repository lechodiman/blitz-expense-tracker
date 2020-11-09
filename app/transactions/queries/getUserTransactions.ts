import { Ctx } from "blitz"
import { FindManyTransactionArgs } from "db"
import getTransactions from "./getTransactions"

type GetUserTransactionsInput = Pick<FindManyTransactionArgs, "where" | "orderBy" | "skip" | "take">

export default async function getUserTransactions(
  { where, orderBy, skip = 0, take }: GetUserTransactionsInput,
  ctx: Ctx
) {
  ctx.session.authorize()

  return getTransactions({ where: { userId: ctx.session.userId } }, ctx)
}
