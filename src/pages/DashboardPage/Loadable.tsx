import { lazyLoad } from '~/utils/Loadable';

export const DashboardPage = lazyLoad(
  () => import('./index'),
  module => module.DashboardPage,
  {
    fallback: (
      <div>loading...</div>
    ),
  },
);
