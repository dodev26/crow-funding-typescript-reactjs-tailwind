import { useTranslation } from "react-i18next"
import { v4 } from "uuid"
import Gap from "~/components/gap"
import { Heading } from "~/components/heading/Heading"
import { CampaignFeatures, CampaignGrid, CampaingnItem } from "~/modules/campaign"
import { lang } from "./lang"


export const DashboardPage = () => {
  const { t } = useTranslation()
  return <>
    <Heading as="h2" number={4}>{t(lang.yourCampaign())}</Heading>
    <CampaignFeatures />
    <Gap />
    <Heading as="h2" >{t(lang.popularCampaign())}</Heading>
    <CampaignGrid className="grid-cols-1 sm:grid-cols-2">
      {Array(4).fill(0).map((_) => (<CampaingnItem key={v4()} />))}
    </CampaignGrid>
  </>
}
