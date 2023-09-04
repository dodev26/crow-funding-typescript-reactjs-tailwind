import { lazyLoad } from '~/utils/Loadable'

export const DashboardPage = lazyLoad(
  () => import('./index'),
  (module) => module.NotFoundPage,
  {
    fallback: <div>loading...</div>
  }
)
