import useRouter from "hooks/useRouter"

function useParams() {
  const { match } = useRouter()
  return match.params
}

export default useParams
