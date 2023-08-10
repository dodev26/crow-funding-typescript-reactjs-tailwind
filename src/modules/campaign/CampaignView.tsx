import Button from "~/components/button"
import { CampaignGrid, CampaignPerk, CampaignSupport, CampaignViewAuthor, CampaingnItem } from "."
import { CampaignCategory, CampaignDesc, CampaignImage, CampaignMeta, CampaignTitle } from "./parts"


const MIDDLE_BAR = [{
  title: 'Campaign',

}, {
  title: "Risks"
},
{
  title: "FAQ"
}, {
  title: "Updates"
}, {
  title: "Comments"
}
]
export const CampaignView = () => {
  return (
    <>
      <div className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center gradient-banner flex items-center justify-center text-white text-[40px] font-bold" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1688809957913-0ecfb2d32dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)` }}>
        Education
      </div>
      <div className="flex items-start gap-x-10 w-full max-w-[1066px] mt-10">
        <div className="flex-1">
          <CampaignImage imageUrl="https://plus.unsplash.com/premium_photo-1675756583672-04a27dfe1f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" imageAlt="img" className="h-[398px] mb-[30px]" />
          <div className="flex justify-center gap-x-5">
            {Array(4).fill(0).map((_, index) => (
              <img src="https://plus.unsplash.com/premium_photo-1675756583672-04a27dfe1f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" className='
              w-[89px] h-[70px] object-cover rounded-lg cursor-zoom-in' key={index} />
            ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px]">
          <CampaignCategory nameCategory="Architecture" pathCategory="/" className="mb-4 text-sm" />
          <CampaignTitle className="font-bold mb-4 text-xl" >Remake - We Make architecture exhibition</CampaignTitle>
          <CampaignDesc className="mb-6 text-sm">Remake - We Make: an exhibition about architecture's social
            agency in the face of urbanisation</CampaignDesc>
          <CampaignViewAuthor />
          <div className="w-full rounded-full bg-[#EFEFEF] h-1 mb-6">
            <div className={`h-full rounded-full w-0  bg-primary/80 transition-all`} style={{
              width: `${50}%`
            }}></div>
          </div>
          <div className="flex items-start gap-x-5 justify-between">
            <CampaignMeta amount="$2,000" text="Raised of $2,500" size="big" />
            <CampaignMeta amount="173" text="Total backers" size="big" />
            <CampaignMeta amount="30" text="Days left" size="big" />
          </div>
          <Button kind="primary" type="button" className="w-full mt-4">Back this project</Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[100px] bg-white p-5 border-b border-b-slate-200">
        <div className='flex items-center gap-x-[60px] text-sm font-medium text-text3'>
          {MIDDLE_BAR.map((item) => (<span className='cursor-pointer first:text-secondary'>{item.title}</span>))}
        </div>
        <Button kind='primary'>Back this project</Button>
      </div>
      <div className='grid gap-x-[124px] grid-cols-[1.3fr,1fr] mt-[35px] max-w-[1170px] mx-auto'>
        <div>
          <h2 className="text-lg font-semibold uppercase mb-5">STORY</h2>
          <div className="bg-white w-full">

          </div>
        </div>
        <div>
          <CampaignSupport />
          <div className="mb-[60px]" />
          <div className="flex flex-col gap-y-[30px]">
            {Array(3).fill(0).map((_, index) => (
              <CampaignPerk key={index} />
            ))}
          </div>
        </div>
      </div>
      <h2 className="mb-10 text-xl font-semibold">You also may be interested in</h2>
      <CampaignGrid>
        <CampaingnItem />
        <CampaingnItem />
        <CampaingnItem />
        <CampaingnItem />
      </CampaignGrid>
    </>
  )
}

