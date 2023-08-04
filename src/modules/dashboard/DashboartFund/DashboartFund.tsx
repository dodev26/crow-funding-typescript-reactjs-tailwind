import classNames from "classnames"

interface IDashboartFund extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}
export const DashboartFund = ({ className, ...props }: IDashboartFund) => {
  return <div className={classNames('cursor-pointer  md:flex items-center gap-x-2 text-text2 dark:text-text3  text-base font-medium', className)} {...props}>
    <span className="w-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 max-w-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>

    </span>
    <span>Fundrising for</span>
    <span className='w-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 max-w-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
    </span>
  </div>
}