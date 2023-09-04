import { lazyLoad } from '~/utils/Loadable'

export const CheckoutPage = lazyLoad(
  () => import('./index'),
  (module) => module.CheckoutPage,
  {
    fallback: <div>loading...</div>
  }
)
