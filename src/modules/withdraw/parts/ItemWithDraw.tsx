interface IItemWithDraw {
  image?: string
  title?: string
  date?: string
}
const ItemWithDraw = ({ image, title, date }: IItemWithDraw) => {
  return (
    <div className='flex items-center gap-x-[15px]'>
      <div className='w-[66px] flex-shrink-0 h-[50px] overflow-hidden rounded-[5px]'>
        <img src={image} alt={title} className='w-full max-w-full h-full object-cover' />
      </div>
      <div className='w-full max-w-[212px] flex-shrink-0 truncate'>
        <h3 className='mb-1 ' title='title'>
          {title}
        </h3>
        <span className='text-text3' title={date}>
          {date}
        </span>
      </div>
    </div>
  )
}

export default ItemWithDraw
