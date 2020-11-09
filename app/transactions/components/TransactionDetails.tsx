import React from "react"
import { Transaction } from "@prisma/client"
import { invalidateQuery, useMutation } from "blitz"
import { motion } from "framer-motion"
import deleteTransaction from "../mutations/deleteTransaction"
import getUserTransactions from "../queries/getUserTransactions"

type TransactionDetailsProps = {
  transaction: Transaction
}

const TransactionDetails: React.FC<TransactionDetailsProps> = ({ transaction }) => {
  const [deleteTransactionMutation] = useMutation(deleteTransaction)

  const handleDeleteTransaction = async () => {
    await deleteTransactionMutation(
      { where: { id: transaction.id } },
      {
        onSuccess: () => {
          invalidateQuery(getUserTransactions)
        },
      }
    )
  }

  const sign = transaction.amount < 0 ? "-" : "+"

  return (
    <motion.li
      key={transaction.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`bg-white shadow-sm text-blue-900 flex justify-between relative p-3 my-3 border-r-4 ${
        transaction.amount < 0 ? "border-red-400" : "border-green-400"
      }`}
    >
      {transaction.name}{" "}
      <span>
        {sign} ${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={handleDeleteTransaction}
        className="absolute left-0 px-2 py-1 text-lg leading-5 text-white transition-opacity duration-200 ease-in-out transform -translate-x-full bg-red-600 border-0 cursor-pointer delete-btn"
      >
        x
      </button>
    </motion.li>
  )
}

export default TransactionDetails
