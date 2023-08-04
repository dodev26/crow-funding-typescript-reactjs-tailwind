import { lazyLoad } from '~/utils/Loadable';

export const CampaignPage = lazyLoad(
  () => import('./index'),
  module => module.CampaignPage,
  {
    fallback: (
      <div>loading...</div>
    ),
  },
);
