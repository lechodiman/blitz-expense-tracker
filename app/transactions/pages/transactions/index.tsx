import Layout from "app/layouts/Layout"
import { BlitzPage, Link } from "blitz"
import React from "react"

const TransactionsPage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href="/transactions/new">
          <a>Create Transaction</a>
        </Link>
      </p>
    </div>
  )
}

TransactionsPage.getLayout = (page) => <Layout title={"Transactions"}>{page}</Layout>

export default TransactionsPage
