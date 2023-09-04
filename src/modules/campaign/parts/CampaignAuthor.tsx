import Avatar from '~/components/avatar'
import Skeleton from '~/components/skeleton'

interface ICampaignAuthorProps {
  imgAvatar: string
  isLoading?: boolean
  authorName: string
}
type ByAuthorType = Pick<ICampaignAuthorProps, 'authorName' | 'isLoading'>
export const CampaignAuthor = ({ authorName, isLoading, imgAvatar }: ICampaignAuthorProps) => {
  return (
    <div className='flex items-center gap-x-3'>
      <Avatar
        src={imgAvatar}
        alt={`avatar of ${authorName}`}
        isLoading={isLoading}
        className='w-[30px] h-[30px] rounded-full'
      />
      <ByAuthor authorName={authorName} isLoading={isLoading} />
    </div>
  )
}
const ByAuthor: React.FC<ByAuthorType> = ({ authorName, isLoading }) => {
  if (isLoading) {
    return <Skeleton className='w-2/4' />
  }
  return (
    <p className='text-xs text-text3'>
      By <span className='text-text1 capitalize font-semibold dark:text-text4'>{authorName}</span>
    </p>
  )
}
