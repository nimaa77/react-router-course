import useRouter from "hooks/useRouter"

function useHistory() {
  const { history } = useRouter()
  return history
}

export default useHistory
