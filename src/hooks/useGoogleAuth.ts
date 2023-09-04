import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { addDoc, collection, getDocs, query, serverTimestamp, where } from 'firebase/firestore'
import { auth, db } from '~/firebase/initialize'

const googleProvider = new GoogleAuthProvider()

const useGoogleAuth = () => {
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider)
      const user = res.user
      const q = query(collection(db, 'users'), where('uid', '==', user.uid))
      const docs = await getDocs(q)
      if (docs.empty) {
        await addDoc(collection(db, 'users'), {
          uid: user.uid,
          name: user.displayName,
          authProvider: 'google',
          firstName: user.displayName,
          lastName: user.displayName,
          email: user.email,
          phone: user.phoneNumber,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
          avatarURL: 'https://i.pravatar.cc/300'
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  return { signInWithGoogle }
}

export default useGoogleAuth
