import { cn } from '~/utils/scripts'

interface IInfoPrice extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  title: string
  price: number
}

const InfoPrice = ({ className, price, title }: IInfoPrice) => {
  return (
    <div className={cn('flex items-center justify-between text-text2 font-medium text-xs md:text-base', className)}>
      <div className='basis-1/3 capitalize '>{title}</div>
      <div className='basis-2/3 flex justify-end items-center'>
        <span className='text-right'>{`$${price}`}</span>
      </div>
    </div>
  )
}

export default InfoPrice
