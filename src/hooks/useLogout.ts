import { toast } from "react-toastify";
import { auth } from "~/firebase/initialize";
import { removeUserFromLS } from "~/utils/auth";

export default function useLogout() {
  return () => auth.signOut().then(() => {
    removeUserFromLS()
  }).catch(err => {
    toast.error(err.message)
  })
}