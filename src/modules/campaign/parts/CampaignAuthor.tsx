
interface ICampaignAuthorProps {
  imgAvatar: string;
  authorName: string;
}
export const CampaignAuthor = ({ authorName, imgAvatar }: ICampaignAuthorProps) => {
  return <div className="flex items-center gap-x-3">
    <img src={imgAvatar} className="w-8 h-8 rounded-full object-cover" alt="" />
    <p className="text-xs text-text3">By <span className="text-text1 capitalize font-semibold dark:text-text4">{authorName}</span></p>
  </div>
}