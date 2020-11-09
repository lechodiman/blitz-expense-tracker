import { useQuery } from "blitz"
import getUserTransactions from "../queries/getUserTransactions"

function useUserTransactions() {
  return useQuery(getUserTransactions, { take: 20 })
}

export default useUserTransactions
