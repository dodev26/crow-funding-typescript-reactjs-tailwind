import { Controller, useForm } from 'react-hook-form'
import { FormGroup } from '~/components/FormGroup/FormGroup'
import FormRow from '~/components/FormRow'
import Input from '~/components/Input/Input'
import Label from '~/components/Label'
import Button from '~/components/button'
import slugify from 'slugify'
import Dropdown from '~/components/dropdown'
import Textarea from '~/components/textarea'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { FormEventHandler, useEffect, useRef, useState } from 'react'
import useOnChange from '~/hooks/useOnchange'
import axios from 'axios'
import { CampaignShemaType, campaignSchema } from '~/utils/schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import ImageUpload from '~/components/ImageUpload'
import DatePicker from '~/components/DatePicker'

import InputNumber from '~/components/inputNumber'
import { Heading } from '~/components/heading/Heading'
import Editor from '~/components/Editor'
import { useColRefUser } from '~/hooks'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { auth, db } from '~/firebase/initialize'
import { uploadTaskPromise } from '~/utils/scripts'
import { Campaign } from '~/types/campaign'
import { useAppSelector } from '~/hooks/hooks'
import { RootState } from '~/store/configureStore'

interface BlobInfo {
  id: () => string
  name: () => string
  filename: () => string
  blob: () => Blob
  base64: () => string
  blobUri: () => string
  uri: () => string | undefined
}
type ProgressFn = (percent: number) => void

const Options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
]

const categoryData = [
  'Architecture',
  'Art',
  'Comics',
  'Crafts',
  'Dance',
  'Design',
  'Fashion',
  'Film & Video',
  'Food',
  'Games',
  'Journalism',
  'Music',
  'Photography',
  'Publishing',
  'Technology',
  'Theater'
]

const CampaignSchema = campaignSchema
type FormInput = Pick<
  Campaign,
  | 'title'
  | 'category'
  | 'sort_description'
  | 'story'
  | 'images'
  | 'goal'
  | 'raised_amount'
  | 'video_url'
  | 'campaign_end_method'
  | 'country'
  | 'start_date'
  | 'end_date'
  | 'amount_prefilled'
>
export const CampaignAddNew = () => {
  // const { handleSubmit, control, setValue, formState: { errors }, reset, watch } = useForm<CampaignFormData>()
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors },
    trigger
  } = useForm<FormInput>({
    resolver: yupResolver(CampaignSchema),
    defaultValues: {
      title: '',
      category: '',
      sort_description: '',
      story: '',
      images: undefined,
      goal: undefined,
      raised_amount: undefined,
      amount_prefilled: undefined,
      video_url: '',
      campaign_end_method: '',
      country: '',
      start_date: undefined,
      end_date: undefined
    }
  })
  const { user } = useAppSelector((state: RootState) => state.auth)
  const [countries, setCountries] = useState([])
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState(false)
  const [filterCountry, onChangeFilterCountry] = useOnChange(500)
  const editorRef = useRef<any>()

  const handleSelectValue = (name: keyof FormInput, value: any) => {
    setValue(name, value)
    trigger(name)
  }

  // const handleResetValue = () => {
  //   reset()
  // }

  console.log(watch('images'))
  const handleImageUpload = async (blobInfo: BlobInfo, _: ProgressFn) => {
    try {
      const storage = getStorage()
      const storageRef = ref(storage, 'images/' + blobInfo.filename())
      await uploadBytes(storageRef, blobInfo.blob())
      const url = await getDownloadURL(storageRef)
      toast.success('Upload image successfully')
      return url
    } catch (error) {
      toast.error('Upload image failed')
    }
  }

  const handleAddNewCampaign = handleSubmit(async (data) => {
    setIsSubmitting(true)
    try {
      const arrImages = Array.from(data.images as FileList)
      const colRef = collection(db, 'campaigns')
      let payload = {
        ...data,
        slug: slugify(data.title, { lower: true }),
        images: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: user?.photoURL,
        author: user?.displayName,
        idAuthor: user?.uid
      } as Campaign
      const arrLinks = await Promise.all(arrImages.map((file) => uploadTaskPromise(file, 'images/' + file.name)))
      if (arrLinks.length > 0) {
        payload = {
          ...payload,
          images: arrLinks
        }
      } else {
        throw new Error('Upload failed')
      }
      await addDoc(colRef, payload)
      toast.success('Upload successfully')
      reset({})
    } catch (error) {
      toast.error('Upload failed')
    } finally {
      setIsSubmitting(false)
    }
  })

  async function fetchCountries(): Promise<void> {
    setIsLoading(true)
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${filterCountry}`)
      setCountries(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (filterCountry) {
      fetchCountries()
    }
  }, [filterCountry])

  const handleResetImage = () => {
    setValue('images', undefined as any)
    trigger('images')
  }

  return (
    <div className='bg-white dark:bg-darkSecondary rounded-xl p-5  lg:py-10 lg:px-[66px]'>
      <Heading className='py-4 px-14 text-base  rounded-xl text-center max-w-max mx-auto bg-text4/20 dark:bg-darkStroke  font-bold md:text-[25px]'>
        Start a Campaign 🚀
      </Heading>

      <form className='mt-10' onSubmit={handleAddNewCampaign}>
        <FormRow className='grid-cols-1 md:grid-cols-2'>
          <FormGroup>
            <Label>Campaign Title </Label>
            <Input
              errorField={errors.title?.message}
              name='title'
              disabled={isSubmitting}
              type='text'
              control={control}
              placeholder='Write a titel'
            />
          </FormGroup>
          <FormGroup>
            <Label>Select a category </Label>
            <Controller
              name='category'
              control={control}
              render={({ field: { value, name } }) => (
                <Dropdown errorField={errors.category?.message}>
                  <Dropdown.Select selected={value} placeholder={'Select category'}></Dropdown.Select>
                  <Dropdown.List>
                    {categoryData.map((option) => (
                      <Dropdown.Option key={option} onClick={() => handleSelectValue(name, option)}>
                        <span className='capitalize'>{option}</span>
                      </Dropdown.Option>
                    ))}
                  </Dropdown.List>
                </Dropdown>
              )}
            />
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label htmlFor='sort_description'>Short Description </Label>
          <Textarea
            disabled={isSubmitting}
            errorField={errors.sort_description?.message}
            placeholder='Write a short description....'
            control={control}
            name='sort_description'
            id='sort_description'
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='story'>Story</Label>
          <Controller
            name='story'
            control={control}
            render={({ field: { value, onChange } }) => (
              <Editor
                disabled={isSubmitting}
                onLoadContent={(editor) => {
                  editorRef.current = editor
                }}
                errorField={errors.story?.message}
                apiKey='ohboiokpooat3dlyvzijliktbpqouisca394g8tr0l13nvph'
                onInit={(_, editor) => (editorRef.current = editor)}
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    'advlist',
                    'autolink',
                    'lists',
                    'link',
                    'image',
                    'charmap',
                    'preview',
                    'anchor',
                    'searchreplace',
                    'visualblocks',
                    'code',
                    'fullscreen',
                    'insertdatetime',
                    'media',
                    'table',
                    'code',
                    'help',
                    'wordcount'
                  ],
                  toolbar:
                    'undo redo | image| blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                  file_picker_types: 'image',
                  image_title: true,
                  automatic_uploads: true,
                  file_picker_callback: (cb, value, meta) => {
                    console.log({
                      value,
                      meta
                    })
                    const input = document.createElement('input')
                    input.setAttribute('type', 'file')
                    input.setAttribute('accept', 'image/')
                    input.onchange = function () {
                      const file = input.files![0]
                      const reader = new FileReader()
                      reader.onload = function () {
                        const id = 'blobid' + new Date().getTime()
                        const blobCache = (window as any).tinymce.activeEditor.editorUpload.blobCache
                        const base64 = (reader.result as string).split(',')[1]
                        const blobInfo = blobCache.create(id, file, base64)
                        blobCache.add(blobInfo)
                        // Call the callback and populate the Title field with the file name
                        cb(blobInfo.blobUri(), { title: file.name })
                      }
                      reader.readAsDataURL(file)
                    }
                    input.click()
                  },
                  images_upload_handler: handleImageUpload as any
                }}
                onEditorChange={(content, editor) => {
                  onChange(content)
                  console.log(editor)
                }}
                value={value}
              />
            )}
          />
        </FormGroup>
        <FormRow className='grid-cols-1'>
          <FormGroup>
            <Label htmlFor='images'>Upload Images</Label>
            <Controller
              name='images'
              control={control}
              render={({ field: { onChange, name, value, ...rest } }) => (
                <ImageUpload
                  disabled={isSubmitting}
                  multiple={true}
                  errorField={errors.images?.message}
                  value={value as any}
                  reset={handleResetImage}
                  onChange={(e) => {
                    const files = e.target.files
                    onChange(files)
                    trigger(name)
                  }}
                  name={name}
                  {...rest}
                />
              )}
            />
          </FormGroup>
        </FormRow>
        <FormRow className='grid-cols-1 md:grid-cols-2'>
          <FormGroup>
            <Label>Goal</Label>
            <InputNumber
              disabled={isSubmitting}
              errorField={errors.goal?.message}
              name='goal'
              control={control}
              placeholder='$0.00 USD'
            />
          </FormGroup>
          <FormGroup>
            <Label>Raised Amount</Label>
            <InputNumber
              disabled={isSubmitting}
              errorField={errors.raised_amount?.message}
              name='raised_amount'
              type='number'
              control={control}
              placeholder='$0.00 USD'
            />
          </FormGroup>
        </FormRow>
        <FormRow className='grid-cols-1 md:grid-cols-2'>
          <FormGroup>
            <Label>Amount Prefilled</Label>
            <InputNumber
              disabled={isSubmitting}
              name='amount_prefilled'
              errorField={errors.amount_prefilled?.message}
              type='number'
              control={control}
              placeholder='Amount Prefilled'
            />
            <p className='text-sm text-left text-text3 max-w-[387px]'>
              It will help fill amount box by click, place each amount by comma, ex: 10,20,30,40
            </p>
          </FormGroup>
          <FormGroup>
            <Label>Video</Label>
            <Input
              disabled={isSubmitting}
              name='video_url'
              errorField={errors.video_url?.message}
              type='text'
              control={control}
              placeholder='video'
            />
            <p className='text-sm text-left text-text3'>Place Youtube or Vimeo Video URL</p>
          </FormGroup>
        </FormRow>
        <FormRow className='grid-cols-1 md:grid-cols-2'>
          <FormGroup>
            <Label>Campaign End Method</Label>
            <Controller
              name='campaign_end_method'
              control={control}
              render={({ field: { value, name } }) => (
                <Dropdown errorField={errors.campaign_end_method?.message}>
                  <Dropdown.Select selected={value} placeholder={'Select one'}></Dropdown.Select>
                  <Dropdown.List>
                    {Options.map((option) => (
                      <Dropdown.Option key={option.value} onClick={() => handleSelectValue(name, option.value)}>
                        {option.label}
                      </Dropdown.Option>
                    ))}
                  </Dropdown.List>
                </Dropdown>
              )}
            />
          </FormGroup>
          <FormGroup>
            <Label>Counrty</Label>
            <Controller
              name='country'
              control={control}
              render={({ field: { value, name } }) => (
                <Dropdown errorField={errors.country?.message}>
                  <Dropdown.Select selected={value} placeholder={'Select  a country'}></Dropdown.Select>
                  <Dropdown.List>
                    <Dropdown.Search
                      isLoading={isLoading}
                      placeholder={value || 'Search a country'}
                      onChange={onChangeFilterCountry as FormEventHandler<HTMLInputElement>}
                    />
                    {countries.length > 0 &&
                      countries.map((country: any) => (
                        <Dropdown.Option
                          key={country?.name?.common}
                          onClick={() => handleSelectValue(name, country?.name?.common)}
                        >
                          {country?.name?.common}
                        </Dropdown.Option>
                      ))}
                  </Dropdown.List>
                </Dropdown>
              )}
            />
          </FormGroup>
        </FormRow>
        <FormRow className='grid-cols-1 md:grid-cols-2'>
          <FormGroup>
            <Label>Start Date</Label>
            <Controller
              name='start_date'
              control={control}
              render={({ field: { value, onChange, ...props } }) => (
                <DatePicker
                  format='dd/MM/yyyy'
                  disabled={isSubmitting}
                  errorField={errors.start_date?.message}
                  value={value}
                  onChange={(v) => onChange(v as Date)}
                  {...props}
                />
              )}
            />
          </FormGroup>
          <FormGroup>
            <Label>End Date</Label>
            <Controller
              name='end_date'
              control={control}
              render={({ field: { value, onChange, ...props } }) => (
                <DatePicker
                  format='dd/MM/yyyy'
                  disabled={isSubmitting}
                  errorField={errors.end_date?.message}
                  value={value}
                  onChange={(v) => onChange(v as Date)}
                  {...props}
                />
              )}
            />
          </FormGroup>
        </FormRow>
        <div className='mt-10'>
          <Button disabled={isSubmitting} isLoading={isSubmitting} type='submit' kind='primary' className='mx-auto'>
            Submit new campaign
          </Button>
        </div>
      </form>
    </div>
  )
}
