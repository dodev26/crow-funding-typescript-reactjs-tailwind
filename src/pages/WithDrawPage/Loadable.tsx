import { lazyLoad } from '~/utils/Loadable'

export const WithDrawPage = lazyLoad(
  () => import('./index'),
  (module) => module.WithDrawPage,
  {
    fallback: <div>loading...</div>
  }
)
