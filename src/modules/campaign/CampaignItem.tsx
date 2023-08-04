import classNames from "classnames"
import { CampaignAuthor, CampaignCategory, CampaignDesc, CampaignImage, CampaignMeta, CampaignTitle } from "./parts"



interface ICampaignItem {
  classNameWrapper?: string
}
export const CampaingnItem = ({ classNameWrapper }: ICampaignItem) => {
  return <div className={classNames("campaign-item dark:rounded-[15px] dark:bg-darkSecondary", classNameWrapper)}>
    <CampaignImage imageAlt="img" imageUrl="https://plus.unsplash.com/premium_photo-1675756583871-6be3905c4ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
    <div className="px-2 lg:px-5 py-4 ">
      <CampaignCategory nameCategory="Education" pathCategory="/" />
      <CampaignTitle>Powered Kits Learning Boxes</CampaignTitle>
      <CampaignDesc>Fun, durable and reusable boxes with
        eco-friendly options.</CampaignDesc>
      <div className="flex items-start justify-between gap-x-5 mb-5">
        <CampaignMeta text="Raised of $1,900" amount={"$2,000"} />
        <CampaignMeta text="Total backers" amount={173} />
      </div>
      <CampaignAuthor imgAvatar="https://images.unsplash.com/photo-1688751900790-c6c737aff564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" authorName="dopdn" />
    </div>
  </div>
}