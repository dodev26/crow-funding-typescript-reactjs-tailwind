import { CampaignShemaType } from '~/utils/schema'

export interface Campaign extends CampaignShemaType {
  author: string
  createdAt: Date
  updatedAt: Date
  idAuthor: string
  avatar: string
  slug: string
  readonly id?: string
}
