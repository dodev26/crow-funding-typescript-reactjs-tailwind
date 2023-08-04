interface ICampaignImageProps {
  imageUrl: string,
  imageAlt: string,
  className?: string

}

export const CampaignImage = ({ imageAlt = "img", imageUrl = "https://plus.unsplash.com/premium_photo-1675756583871-6be3905c4ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80", className = "h-[158px]" }: ICampaignImageProps) => {
  return <div className={className}>
    <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover rounded-2xl" />
  </div>
}