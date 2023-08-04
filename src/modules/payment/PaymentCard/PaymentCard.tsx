import classNames from "classnames"
import Button from "~/components/button"

interface IPaymentCard {
  className?: string
  desc: string
  btnText: string
  imgIcon: string
  onClick?: () => void
}
export const PaymentCard = ({ className, onClick, desc = "blackpink in your area", btnText = "Comming soon", imgIcon }: IPaymentCard) => {

  return <div className={classNames("max-w-[245px] md:max-w-[292px] w-full p-5 md:p-[25px] bg-white shadow-sdsecondary rounded-[15px] dark:bg-darkSecondary dark:shadow-none", className)}>
    <div className="flex flex-col items-center justify-center">
      <img srcSet={`${imgIcon} 2x`} alt="Paypal" className="w-[65px] h-[65px] md:w-[80px] md:h-[80px] object-cover block mb-[25px] md:mb-[40px]" />
      <span className="text-xs md:text-sm inline-block text-text3 mb-5 md:mb-[25px]">{desc}</span>
      <Button onClick={onClick} type="button" kind="tertiary" className="w-full">{btnText}</Button>
    </div>
  </div>
}