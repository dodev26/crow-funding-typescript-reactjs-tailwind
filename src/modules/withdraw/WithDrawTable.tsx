import { cn } from '~/utils/scripts'
import { AuthorWithDraw } from './parts'

interface IWithDrawTable {
  className?: string
}

const WithDrawTable = ({ className = 'w-full max-w-full' }: IWithDrawTable) => {
  return (
    <div className={cn('relative overflow-x-auto', className)}>
      <table className='w-full text-sm text-left'>
        <thead className='dark:bg-[#22222B] dark:text-white text-sm font-semibold'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Campaign
            </th>
            <th scope='col' className='px-6 py-3'>
              Category
            </th>
            <th scope='col' className='px-6 py-3'>
              Amount
            </th>
            <th scope='col' className='px-6 py-3'>
              Backer
            </th>
          </tr>
        </thead>
        <tbody>
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <tr
                key={index}
                className='bg-white border-b border-strock dark:border-darkStroke dark:bg-darkSecondary  text-text1 text-xs font-medium'
              >
                <th scope='row' className='px-6 py-4  whitespace-nowrap dark:text-white'>
                  aaaa
                </th>
                <td className='px-6 py-4'>
                  <div className='w-full max-w-[142px] truncate'>
                    <span>Camera Gear</span>
                  </div>
                </td>
                <td className='px-6 py-4 font-bold'>
                  <div className='w-full max-w-[124px]'>
                    <span>$ 5,850</span>
                  </div>
                </td>
                <td className='px-6 py-4'>
                  <AuthorWithDraw name='Mahfuzul d' />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
export default WithDrawTable
