import { lazyLoad } from '~/utils/Loadable';

export const SignInPage = lazyLoad(
  () => import('./index'),
  module => module.ProfilePage,
  {
    fallback: (
      <div>loading...</div>
    ),
  },
);
