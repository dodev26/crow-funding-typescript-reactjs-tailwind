import { lazyLoad } from '~/utils/Loadable';

export const CampaignDetailPage = lazyLoad(
  () => import('./index'),
  module => module.CampaignDetailPage,
  {
    fallback: (
      <div>loading...</div>
    ),
  },
);
