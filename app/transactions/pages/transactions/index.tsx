import AddTransaction from "app/transactions/components/AddTransaction"
import Balance from "app/transactions/components/Balance"
import Header from "app/transactions/components/Header"
import History from "app/transactions/components/History"
import TransactionList from "app/transactions/components/TransactionList"
import { TransactionsProvider } from "app/transactions/context"
import useUserTransactions from "app/transactions/hooks/useUserTransactions"
import { BlitzPage } from "blitz"
import React, { Suspense } from "react"

const TransactionsPage: BlitzPage = () => {
  return (
    <Suspense fallback={"loading..."}>
      <TransactionsProvider>
        <div className="flex flex-col items-center justify-center min-h-screen m-0 bg-gray-300 font-body">
          <div className="w-full p-4 mx-auto sm:p-5 sm:w-8/12 lg:w-4/12">
            <Header />
            <Balance className="mt-6" />
            <History />
            <TransactionList />
            <AddTransaction />
          </div>
        </div>
      </TransactionsProvider>
    </Suspense>
  )
}

export default TransactionsPage
