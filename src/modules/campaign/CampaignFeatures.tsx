import { useEffect, useState } from "react"
import { CampaignCategory, CampaignDesc, CampaignImage, CampaignMeta, CampaignTitle } from "./parts"


export const CampaignFeatures = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      const ramdomProgress = Math.floor(Math.random() * 100)
      setProgress(ramdomProgress)
    }, 1000)
  }, [])


  return <div className="flex flex-col sm:flex-row gap-y-[22.5px] lg:gap-y-0 items-center gap-x-[30px] w-full max-w-[1048px]">
    <CampaignImage imageUrl="https://plus.unsplash.com/premium_photo-1675756583672-04a27dfe1f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" imageAlt="img" className="h-[266px] flex-1" />
    <div className="flex-1 max-w-[435px]">
      <CampaignCategory nameCategory="Architecture" pathCategory="/" className="mb-4 text-sm" />
      <CampaignTitle className="font-bold mb-4 text-xl line-clamp-2" >Remake - We Make architecture exhibition</CampaignTitle>
      <CampaignDesc className="mb-6 text-sm line-clamp-2">Remake - We Make: an exhibition about architecture's social
        agency in the face of urbanisationRemake - We Make: an exhibition about architecture's social
        agency in the face of urbanisationRemake - We Make: an exhibition about architecture's social
        agency in the face of urbanisation</CampaignDesc>
      <div className="w-full rounded-full bg-[#EFEFEF] dark:bg-darkStroke h-1 mb-6">
        <div className={`h-full rounded-full w-0  bg-primary/80 transition-all`} style={{
          width: `${progress}%`
        }}></div>
      </div>
      <div className="flex items-start gap-x-5 justify-between">
        <CampaignMeta amount="$2,000" text="Raised of $2,500" size="big" />
        <CampaignMeta amount="173" text="Total backers" size="big" />
        <CampaignMeta amount="30" text="Days left" size="big" />
      </div>
    </div>
  </div>
}