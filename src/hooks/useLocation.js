import useRouter from "hooks/useRouter"

function useLocation() {
  const { location } = useRouter()
  return location
}

export default useLocation
