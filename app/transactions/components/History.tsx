import React from "react"
import useUserTransactions from "../hooks/useUserTransactions"
import { sumTotalIncome, sumTotalExpenses } from "../utils/functions"

const History: React.FC = () => {
  const [data] = useUserTransactions()

  if (!data) {
    return <p>hola</p>
  }

  const totalIncome = sumTotalIncome(data.transactions)

  const totalExpenses = sumTotalExpenses(data.transactions)

  return (
    <div className="flex justify-between p-5 mx-0 my-5 bg-white rounded-md shadow-md">
      <div className="flex-1 text-center border-r">
        <h4 className="text-xl font-bold uppercase">Income</h4>
        <p aria-label="total income" className="text-xl text-green-500">
          {totalIncome}
        </p>
      </div>

      <div className="flex-1 text-center">
        <h4 className="text-xl font-bold uppercase">Expense</h4>
        <p aria-label="total expenses" className="text-xl text-red-700">
          {totalExpenses}
        </p>
      </div>
    </div>
  )
}

export default History
