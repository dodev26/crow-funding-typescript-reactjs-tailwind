import { lazyLoad } from '~/utils/Loadable';

export const SignInPage = lazyLoad(
  () => import('./index'),
  module => module.PaymentPage,
  {
    fallback: (
      <div>loading...</div>
    ),
  },
);
