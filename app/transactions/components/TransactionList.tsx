import React from "react"
import { AnimatePresence } from "framer-motion"
import useUserTransactions from "../hooks/useUserTransactions"
import Transaction from "./Transaction"

const TransactionList: React.FC = () => {
  const [data] = useUserTransactions()

  if (!data) {
    return <p>hola</p>
  }

  return (
    <>
      <h3 className="pb-2 mt-10 text-xl font-bold border-b-2 border-gray-400">History</h3>
      <ul className="list">
        <AnimatePresence>
          {data.transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </AnimatePresence>
      </ul>
    </>
  )
}

export default TransactionList
