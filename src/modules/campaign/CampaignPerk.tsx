import Button from "~/components/button"
import { CampaignTitle } from "./parts"

interface ICampaignPerk {
  showButton?: boolean
}
export const CampaignPerk = ({ showButton = false }: ICampaignPerk) => {
  return (
    <div>
      <div className="bg-white shadow-sm rounded-xl dark:bg-darkSecondary">
        <img src="https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80" alt="" className="h-[232px]  w-full object-cover rounded-xl" />
        <div className="p-5">
          <span className="inline-block mb-5 bg-secondary text-white text-xs py-1 px-3 rounded">Featured</span>
          <CampaignTitle className="text-xl mb-1 font-semibold">Special one camera</CampaignTitle>
          <div className="flex items-center gap-x-3 mb-4">
            <span className="text-text1 dark:text-white font-bold text-xl">$2,724 USD</span> <span className="text-sm line-through text-error font-medium">$1,504 USD</span> <span className="text-error text-xs font-medium">(12% OFF)</span>
          </div>
          <div className="flex flex-col gap-y-1 mb-4 text-black dark:text-text4">
            <strong>Estimated Shipping</strong><span className="text-text2 dark:text-text3">October 2022</span>
          </div>
          <p className="text-text2 dark:text-text3 mb-[15px]"><strong className="text-text1 dark:text-white">05</strong> claimed</p>
          <p className="text-sm text-text2 dark:text-text3">Ships worldwide</p>
        </div>
      </div>
      {showButton && <div className="mt-6">
        <Button kind="secondary" className="w-full">Get this perk</Button></div>}
    </div>

  )
}