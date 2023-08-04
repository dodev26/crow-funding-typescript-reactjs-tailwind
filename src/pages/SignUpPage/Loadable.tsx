import { lazyLoad } from '~/utils/Loadable';

export const SignUpPage = lazyLoad(
  () => import('./index'),
  module => module.SignUpPage,
  {
    fallback: (
      <div>loading...</div>
    ),
  },
);
