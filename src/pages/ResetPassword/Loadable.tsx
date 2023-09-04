import { lazyLoad } from '~/utils/Loadable'

export const ResetPassword = lazyLoad(
  () => import('./index'),
  (module) => module.ResetPassword,
  {
    fallback: <div>loading...</div>
  }
)
