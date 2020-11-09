import React from "react"
import { BlitzPage, useQuery } from "blitz"
import { useCurrentUser } from "app/hooks/useCurrentUser"
import AddTransaction from "app/transactions/components/AddTransaction"
import Balance from "app/transactions/components/Balance"
import Header from "app/transactions/components/Header"
import IncomeExpenses from "app/transactions/components/History"
import TransactionList from "app/transactions/components/TransactionList"
import { TransactionsProvider } from "app/transactions/context"
import getTransactions from "app/transactions/queries/getTransactions"

const TransactionsPage: BlitzPage = () => {
  const currentUser = useCurrentUser()

  const [data] = useQuery(
    getTransactions,
    { where: { userId: currentUser?.id } },
    { enabled: currentUser }
  )

  return (
    <TransactionsProvider>
      <div className="flex flex-col items-center justify-center min-h-screen m-0 bg-gray-300 font-body">
        <div className="w-full p-4 mx-auto sm:p-5 sm:w-8/12 lg:w-4/12">
          <Header />
          <Balance className="mt-6" />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
    </TransactionsProvider>
  )
}

export default TransactionsPage
