import { Ctx, NotFoundError } from "blitz"
import db, { FindFirstTransactionArgs } from "db"

type GetTransactionInput = Pick<FindFirstTransactionArgs, "where">

export default async function getTransaction({ where }: GetTransactionInput, ctx: Ctx) {
  ctx.session.authorize()

  const transaction = await db.transaction.findFirst({ where })

  if (!transaction) throw new NotFoundError()

  return transaction
}
