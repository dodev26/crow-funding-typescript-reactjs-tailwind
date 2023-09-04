import { collection, getDocs, query } from 'firebase/firestore'
import { useEffect } from 'react'
import PageTitle from '~/components/pageTitle'
import { db } from '~/firebase/initialize'
import { WithDrawTable } from '~/modules/withdraw'
import WithDrawCard from '~/modules/withdraw/WithDrawCard'

export const WithDrawPage = () => {
  const fetchCampaigns = async () => {
    try {
      const colCampaigns = collection(db, 'campaigns')
      const queries = query(colCampaigns)
      const querySnapshot = await getDocs(queries)
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        idDoc: doc.id
      }))
      console.log(data)
    } catch (error) {}
  }

  useEffect(() => {
    fetchCampaigns()
  }, [])
  return (
    <>
      <PageTitle>Withdraw</PageTitle>
      <div className='w-full max-w-[1243px] grid xl:grid-cols-[1fr,407px] gap-x-10'>
        <WithDrawTable />
        <WithDrawCard />
      </div>
    </>
  )
}
