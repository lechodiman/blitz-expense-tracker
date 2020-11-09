import { sumAllAmounts } from "app/transactions/utils/functions"
import React, { Suspense } from "react"
import useUserTransactions from "../hooks/useUserTransactions"

type BalanceProps = {
  className?: string
}

const Balance: React.FC<BalanceProps> = ({ className }) => {
  const [data] = useUserTransactions()

  if (!data) {
    return <p>hola</p>
  }

  const total = sumAllAmounts(data.transactions)

  return (
    <Suspense fallback="Loading">
      <div className={className}>
        <h4 className="uppercase">Your balance </h4>
        <h1 className="text-3xl tracking-wider" aria-label="total balance">
          ${total}
        </h1>
      </div>
    </Suspense>
  )
}

export default Balance
