import { Ctx } from "blitz"
import db, { TransactionCreateArgs } from "db"

type CreateTransactionInput = {
  data: Omit<TransactionCreateArgs["data"], "user">
}

export default async function createTransaction({ data }: CreateTransactionInput, ctx: Ctx) {
  ctx.session.authorize()

  const transaction = await db.transaction.create({
    data: { ...data, user: { connect: { id: ctx.session.userId } } },
  })

  return transaction
}
