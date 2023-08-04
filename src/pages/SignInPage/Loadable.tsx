import { lazyLoad } from '~/utils/Loadable';

export const SignInPage = lazyLoad(
  () => import('./index'),
  module => module.SignInPage,
  {
    fallback: (
      <div>loading...</div>
    ),
  },
);
