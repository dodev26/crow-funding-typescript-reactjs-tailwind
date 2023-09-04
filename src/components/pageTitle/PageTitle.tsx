import { Helmet } from 'react-helmet-async'
import { WithChildrenProps } from '~/types/genenalTypes'

const PageTitle: React.FC<WithChildrenProps> = ({ children }) => {
  return (
    <Helmet>
      <title>{children} | Crowfunding</title>
    </Helmet>
  )
}
export default PageTitle
