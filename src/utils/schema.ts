import * as yup from 'yup'


export const schema = yup.object().shape({
  firstName: yup.string().max(20, 'maximum 20 characters').required('First name is required'),
  lastName: yup.string().max(20, 'maximum 20 characters').required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone is required'),
  currentPassword: yup.string().required('Current password is required').min(6, 'Password must be at least 6 characters'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Confirm password is required'),
  dateOfBirth: yup.date().required('Date of birth is required'),
  avatarURL: yup.mixed().required('Avatar is required'),
  term: yup.boolean().required().oneOf([true])
})

export const campaignSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  category: yup.string().required('Category is required'),
  sort_description: yup.string().required('Sort description is required'),
  story: yup.string().required('Story is required'),
  goal: yup.number().transform((value) => (isNaN(value) ? undefined : value)).nullable().required('Goal is required').positive('Goal must be positive'),
  raised_amount: yup.number().transform((value) => (isNaN(value) ? undefined : value)).nullable().required('Raised amount is required').positive('Raised amount  must be positive'),
  amount_prefilled: yup.number().transform((value) => (isNaN(value) ? undefined : value)).nullable().required('Amount  prefilled is required').positive('Amount  prefilled must be positive'),
  video_url: yup.string().required("Video url is required"),
  campaign_end_method: yup.string().required("Campaign end method is required"),
  country: yup.string().required("Country is required"),
  start_date: yup.date().required("Start date is required"),
  end_date: yup.date().min(
    yup.ref('start_date'),
    "end date can't be before start date"
  ).required("End date is required"),
  image_url: yup.mixed().required('Image is required'),
})
export type SchemaType = yup.InferType<typeof schema>
export type CampaignShemaType = yup.InferType<typeof campaignSchema>