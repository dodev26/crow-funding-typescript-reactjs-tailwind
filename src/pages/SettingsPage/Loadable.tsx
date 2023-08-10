import { lazyLoad } from '~/utils/Loadable';

export const SettingsPage = lazyLoad(
  () => import('./index'),
  module => module.SettingsPage,
  {
    fallback: (
      <div>loading...</div>
    ),
  },
);
