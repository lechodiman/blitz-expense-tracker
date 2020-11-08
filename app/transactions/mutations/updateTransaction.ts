import { Ctx } from "blitz"
import db, { TransactionUpdateArgs } from "db"

type UpdateTransactionInput = Pick<TransactionUpdateArgs, "where" | "data">

export default async function updateTransaction({ where, data }: UpdateTransactionInput, ctx: Ctx) {
  ctx.session.authorize()

  const transaction = await db.transaction.update({ where, data })

  return transaction
}
