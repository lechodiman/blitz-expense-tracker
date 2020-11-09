import { useCurrentUser } from "app/hooks/useCurrentUser"
import { useQuery } from "blitz"
import getTransactions from "../queries/getTransactions"

function useUserTransactions() {
  const currentUser = useCurrentUser()

  return useQuery(getTransactions, { where: { userId: currentUser?.id } }, { enabled: currentUser })
}

export default useUserTransactions
