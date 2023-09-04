interface IAuthorWithDraw {
  name: string
  star?: number
}
const AuthorWithDraw = ({ name = 'Mahfuzul Nabil' }: IAuthorWithDraw) => {
  return (
    <div className='flex items-center gap-x-[15px]'>
      <div className='w-[40px] flex-shrink-0 h-[40px] overflow-hidden rounded-full'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU'
          alt=''
          className='w-full max-w-full h-full object-cover'
        />
      </div>
      <div className='w-full max-w-[87px]  flex-shrink-0'>
        <h3 title={name} className='mb-1 line-clamp-1'>
          {name}
        </h3>
        <div className='flex items-center'>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <svg
                key={index}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-[10px] h-[10px] text-yellow-500'
              >
                <path
                  fillRule='evenodd'
                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                  clipRule='evenodd'
                />
              </svg>
            ))}
        </div>
      </div>
    </div>
  )
}

export default AuthorWithDraw
