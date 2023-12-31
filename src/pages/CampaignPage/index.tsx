import { Link } from "react-router-dom"
import Button from "~/components/button"
import { Heading } from "~/components/heading/Heading"
import { PATH } from "~/constants"
import { CampaignFeatures, CampaignGrid } from "~/modules/campaign"



export const CampaignPage = () => {
  return <>
    <div className="mb-10 bg-white dark:bg-darkSecondary rounded-3xl flex items-center justify-between py-8 px-10">
      <div className="flex items-start gap-x-6">
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white bg-secondary/60">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
        <div className="flex-1">
          <Heading className="text-[22px] font-semibold mb-2">Create Your Campaign</Heading>
          <p className="text-sm text-text3 mb-2">Jump right into our editor and create your first Virtue campaign!</p>
          <Link to="/" className="text-primary text-sm">Need any help? Learn More...</Link>
        </div>
      </div>
      <Button type="button" kind="tertiary" href={PATH.campaign_start} className="px-8">Create campaign</Button>
    </div>
    <Heading as="h2" number={4}>Your campaign</Heading>
    <CampaignGrid type="secondary">
      <CampaignFeatures />
      <CampaignFeatures />
      <CampaignFeatures />
      <CampaignFeatures />
      <CampaignFeatures />
    </CampaignGrid>
    <div className="mt-10 text-center">
      <Button type="button" kind="tertiary" className="mx-auto px-8" ><span className="leading-none">See more</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
      </Button>
    </div>
  </>
}