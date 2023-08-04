import { v4 } from "uuid"
import Gap from "~/components/gap"
import { Heading } from "~/components/heading/Heading"
import { CampaignFeatures, CampaignGrid, CampaingnItem } from "~/modules/campaign"


export const DashboardPage = () => {
  return <>
    <Heading as="h2" number={4}>Your campaign</Heading>
    <CampaignFeatures />
    <Gap />
    <Heading as="h2" >Popular campaign</Heading>
    <CampaignGrid className="grid-cols-1 sm:grid-cols-2">
      {Array(4).fill(0).map((item) => (<CampaingnItem key={v4()} />))}
    </CampaignGrid>
  </>
}
