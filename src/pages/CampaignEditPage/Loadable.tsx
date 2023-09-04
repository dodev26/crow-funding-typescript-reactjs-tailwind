import { lazyLoad } from '~/utils/Loadable'

export const CampaignEditPage = lazyLoad(
  () => import('./index'),
  (module) => module.CampaignEditPage,
  {
    fallback: <div>loading...</div>
  }
)
