import { Ctx } from "blitz"
import db, { TransactionCreateArgs } from "db"

type CreateTransactionInput = Pick<TransactionCreateArgs, "data">
export default async function createTransaction({ data }: CreateTransactionInput, ctx: Ctx) {
  ctx.session.authorize()

  const transaction = await db.transaction.create({ data })

  return transaction
}
