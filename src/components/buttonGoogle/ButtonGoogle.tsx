
interface ButtonGoogleProps {
  text?: string,
  onClick?: () => void
  className?: string
}
export const ButtonGoogle = ({ text = "Sign up with google", className, onClick = () => { } }: ButtonGoogleProps) => {
  return (
    <button onClick={onClick} className={` transition-all flex items-center justify-center w-full py-4 mb-5 gap-x-3 border border-strock dark:border-darkStroke rounded-xl ${className} `}>
      <img srcSet="/icon-google.png 2x" alt="icon google" />
      <span className='text-text2 font-semibold text-base dark:text-white'>{text}</span>
    </button>
  )
}

