import { cn } from '~/utils/scripts'

interface IProductCard extends React.HTMLAttributes<HTMLDivElement> {
  img: string
  name: string
  price: number
  className?: string
}
const ProductCard = ({ img, name, price, className, ...props }: IProductCard) => {
  return (
    <div
      className={cn(
        'md:px-5 bg-gray-100 w-full md:max-w-[422px] rounded-[10px] md:py-4 py-[11px] px-[15px] flex items-center justify-start gap-x-[10px] md:gap-x-[20px]',
        className
      )}
      {...props}
    >
      <img className='md:w-[89px] w-[64px] h-[50px] md:h-[70px] object-cover' src={img} alt={name} />
      <div className='w-full max-w-[160px] truncate text-text1 text-xs md:text-base  font-medium' title={name}>
        {name}
      </div>
      <span className='text-text1 text-xs md:text-base font-bold flex-shrink-0'>$2,724 USD</span>
    </div>
  )
}

export default ProductCard
