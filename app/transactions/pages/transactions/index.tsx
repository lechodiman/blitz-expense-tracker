import TransactionForm from "app/transactions/components/TransactionForm"
import Balance from "app/transactions/components/Balance"
import Header from "app/transactions/components/Header"
import History from "app/transactions/components/History"
import TransactionList from "app/transactions/components/TransactionList"
import { BlitzPage } from "blitz"
import React, { Suspense } from "react"

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center min-h-screen">
      <div className="w-20 h-20 border-t-2 border-purple-600 rounded-full animate-spin"></div>
    </div>
  )
}

const TransactionsPage: BlitzPage = () => {
  return (
    <Suspense fallback={<Spinner></Spinner>}>
      <div className="flex flex-col items-center justify-center min-h-screen m-0 bg-gray-300 font-body">
        <div className="w-full p-4 mx-auto sm:p-5 sm:w-8/12 lg:w-4/12">
          <Header />
          <Balance className="mt-6" />
          <History />
          <TransactionList />
          <h3 className="pb-2 mt-10 text-xl font-bold border-b-2 border-gray-400">
            Add new transaction
          </h3>
          <TransactionForm />
        </div>
      </div>
    </Suspense>
  )
}

export default TransactionsPage
