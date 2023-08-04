import { lazyLoad } from '~/utils/Loadable';

export const StartCampaignPage = lazyLoad(
  () => import('./index'),
  module => module.StartCampaignPage,
  {
    fallback: (
      <div>loading...</div>
    ),
  },
);
