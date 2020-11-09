import { useQuery } from "blitz"
import getUserTransactions from "../queries/getUserTransactions"

function useUserTransactions() {
  return useQuery(getUserTransactions, {})
}

export default useUserTransactions
