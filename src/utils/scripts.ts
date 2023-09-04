import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'

export const uploadTaskPromise = async (file: File, path: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const storage = getStorage()
    const storageRef = ref(storage, path)
    const uploadTask = uploadBytesResumable(storageRef, file)
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progressPercent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(progressPercent)
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused')
            break
          case 'running':
            console.log('Upload is running')
            break
          default:
            console.log('Nothing at all')
        }
      },
      (error) => {
        reject(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL)
        })
      }
    )
  })
}

export const cn = (...inputs: classNames.ArgumentArray): string => {
  return twMerge(classNames(inputs))
}

export function formatCurrency(amount: number | string) {
  return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

export const calDaysLeft = (startDate: Date, endDate: Date) => {
  const timeDifference = Math.abs(endDate?.valueOf() - startDate?.valueOf())
  const daysRemaining = Math.floor(timeDifference / (24 * 60 * 60 * 1000))
  return daysRemaining
}

export const progressCrowFunding = (goal: number, raised: number) => {
  const percent = Math.round((raised / goal) * 100)
  return percent
}
